import styled from "styled-components";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import img from "../images/PlayForFun4.png";
import useFetch from "../Hooks/UseFetch";

const GridView = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
  justify-items: center;
`;

const Games = () => {
  const { games } = useFetch(
    "https://www.leovegas.com/api/public-casino/bymarket/se"
  );

  console.log(games?.data.games[0].casino.edges);

  return (
    <>
      <h1>All Games</h1>
      <GridView>
        {games?.data.games[0].casino.edges.map((game) => {
          return (
            <Card src={game.node.image.icon.src} slug={game.node.slug}></Card>
          );
        })}

        {games?.data.games[2].jackpots.edges.map((game) => {
          return (
            <Card src={game.node.image.icon.src} slug={game.node.slug}></Card>
          );
        })}

        {games?.data.games[3].newest.edges.map((game) => {
          return (
            <Card src={game.node.image.icon.src} slug={game.node.slug}></Card>
          );
        })}

        {games?.data.games[4].leojackpot.edges.map((game) => {
          return (
            <Card src={game.node.image.icon.src} slug={game.node.slug}></Card>
          );
        })}
      </GridView>
    </>
  );
};

export default Games;
