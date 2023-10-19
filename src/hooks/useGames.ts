import { useEffect, useState } from "react";
import { apiClient } from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform{
    id: number;
    name: string;
    slug: string;
}
export interface Game {
    background_image: string;
    id: number;
    name: string;
    parent_platforms: {platform : Platform}[]; //defines the structure of each element in the array. Inside the array, each element should be an object with a property named platform
    metacritic: number; //to display score 
}

  interface FetchGamesResponse { //defines structure of response from API
    count: number; //no. of games
    results: Game[]; //array of games
  }
  
const useGames = () => {
    const controller = new AbortController();
    const [games, setGames] = useState<Game[]>([]); //empty array of games
    const [error, setError] = useState([]);
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
        setLoading(true);
      apiClient
        .get<FetchGamesResponse>("/games",)
        // {signal:controller.signal})
        .then((res) => {
          setGames(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message)
            setLoading(false);
        });
        return() => controller.abort();
    }, []);

    return {games, error, isLoading};
}

export default useGames;