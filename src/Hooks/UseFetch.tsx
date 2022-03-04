import { faSuitcaseRolling } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export interface apiType {
  status: string;
  data: Data;
}

type Data = {
  games: Games[];
};

type Games = {
  casino: eachGameType;
  live: eachGameType;
  jackpots: eachGameType;
  newest: eachGameType;
  leojackpot: eachGameType;
};

type eachGameType = {
  pageInfo: PageInfo;
  edges: Edges[];
};

type Edges = {
  node: Node;
};

type Node = {
  slug: string;
  image: Image;
  url: string;
  attrs: {};
  jackpot: Jackpot;
};

type Image = {
  icon: {
    src: string;
  };
};

type Jackpot = {
  currency: string;
  displayValue: number;
};

type PageInfo = {
  slug: string;
  first: number;
  total: number;
};

function useFetch(url: string): {
  games: apiType | null;
} {
  const [games, setGames] = useState<apiType | null>(null);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data: apiType) => {
        setGames(data);
      });
  }, [url]);

  return {
    games,
  };
}

export default useFetch;
