import useData from "./useData";

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

  
const useGames = () => useData<Game>('/games');

export default useGames;