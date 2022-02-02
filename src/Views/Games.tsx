import styled from "styled-components";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import img from "../images/PlayForFun4.png";
import useFetch from "../Hooks/UseFetch";

/// Fetch games here

const GridView = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
  justify-items: center;
`;

const TestCard = styled.img`
  width: 200px;
  height: 200px;
  border: 1px solid black;
  text-align: center;
  margin-bottom: 1rem;
`;

const Games = () => {
  // const [games, addGame] = useState<any[]>([]);

  // const [loading, setLoading] = useState(true);
  const { games } = useFetch(
    "https://www.leovegas.com/api/public-casino/bymarket/se"
  );

  console.log(games?.data.games[0].casino.edges);

  return (
    <>
      <h1>Games</h1>
      <GridView>
        {games?.data.games[0].casino.edges.map((game) => {
          return <TestCard src={game.node.image.icon.src}></TestCard>;
        })}
      </GridView>
    </>
  );
};

export default Games;
