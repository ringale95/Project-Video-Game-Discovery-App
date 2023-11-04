import { useEffect, useState } from "react";
import { apiClient } from "../services/api-client";
import { CanceledError } from "axios";


export interface Genre{
    id: number;
    name: string;
}

export interface FetchGenresResponse{
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const controller = new AbortController();
    const [genres, setGenres] = useState<Genre[]>([]); //empty array of games
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
        setLoading(true);
      apiClient
        .get<FetchGenresResponse>("/genres", {signal:controller.signal})

        .then((res) => {
          setGenres(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message)
            setLoading(false);
        });
        return() => controller.abort();
    }, []);

    return {genres, error, isLoading};
}

export default useGenres;