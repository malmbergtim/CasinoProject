import useFetch from "../Hooks/UseFetch";
import Card from "../components/Card";
import styled from "styled-components";
import SearchComponent from "../components/searchComponent";

import { searchContext } from "../context /SearchContext";
import { useContext } from "react";
const GridView = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
  justify-items: center;
`;

const GridHeader = styled.h1`
  text-align: center;
  padding: 1.5rem;
`;

const Jackpots = () => {
  const context = useContext(searchContext);
  const { games } = useFetch(
    "https://www.leovegas.com/api/public-casino/bymarket/se"
  );
  return (
    <>
      <GridHeader>Jackpots</GridHeader>
      <SearchComponent title="Jackpots"></SearchComponent>
      <GridView>
        {games?.data.games[2].jackpots.edges
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
          .map((game, index) => {
            return (
              <Card src={game.node.image.icon.src} slug={game.node.slug} id={index}></Card>
            );
          })}
      </GridView>
    </>
  );
};

export default Jackpots;
