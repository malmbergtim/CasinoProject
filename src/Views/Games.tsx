import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import Card from "../components/Card";
import img from "../images/PlayForFun4.png";
import useFetch from "../Hooks/UseFetch";
import { searchContext } from "../context /SearchContext";
import SearchComponent from "../components/searchComponent";

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

  console.log(games?.data.games);
  const context = useContext(searchContext);

  // games?.data.games[3].newest.edges &&
  //         games?.data.games[4].leojackpot.edges
  return (
    <>
      <h1 id="top">All Games</h1>
      <SearchComponent title="All Games"></SearchComponent>
      <GridView>
        {games?.data.games[0].casino.edges

          .filter((game) => {
            if (context?.searchTerm == "") {
              return game;
            } else if (
              game.node.slug
                .toLowerCase()
                .includes(context!.searchTerm.toLowerCase())
            )
              return game;
          })
          .map((game) => {
            return (
              <Card src={game.node.image.icon.src} slug={game.node.slug}></Card>
            );
          })}
      </GridView>
    </>
  );
};

export default Games;
