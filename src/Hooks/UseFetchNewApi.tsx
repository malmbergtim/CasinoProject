import { faSuitcaseRolling } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export interface apiType {
  id: number;
  slug: string;
  imageSrc: string;
  urlSrc: string;
  tableSrc: boolean;
  categories: categories
}

type categories = {
  newest: string;
  jackpots: string;
  casino: string;
  leojackpot: string;
}



function useFetchNewApi(url: string): {
  games: apiType[] | null;
  casino: apiType[] | null;
  jackpots: apiType[] | null;
  newest: apiType[] | null;
  leojackpot: apiType[] | null;
} {
  const [games, setGames] = useState<apiType[] | null>([]);

  const [casino, setCasino] = useState<apiType[] | null>([]);

  const [jackpots, setJackpots] = useState<apiType[] | null>([]);

  const [newest, setNewest] = useState<apiType[] | null>([]);

  const [leojackpot, setLeoJackpot] = useState<apiType[] | null>([]);



  
  

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data: apiType[]) => {
        setGames(data);
        setLeoJackpot(data);
        setNewest(data);
        setCasino(data);
        setJackpots(data);
      });
  }, [url]);

  return {
    games,
    jackpots,
    leojackpot,
    casino,
    newest
  };
}

export default useFetchNewApi;
