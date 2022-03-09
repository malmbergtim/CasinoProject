import useFetch from "../Hooks/UseFetch";
import Card from "../components/Card";
import styled from "styled-components";
import { useState, useContext } from "react";
import SearchComponent from "../components/searchComponent";

import { searchContext } from "../context /SearchContext";
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

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchLabel = styled.label`
  margin-bottom: 5px;
`;

const SearchInput = styled.input`
  width: 15rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const Casino = () => {
  const { games } = useFetch(
    "https://www.leovegas.com/api/public-casino/bymarket/se"
  );

  const context = useContext(searchContext);

  return (
    <>
      <GridHeader>Casino</GridHeader>

      <SearchComponent title="casino" />

      <GridView>
        {games?.data.games[0].casino.edges
          .filter((game) => {
            if (context!.searchTerm == "") {
              return game;
            } else if (
              game.node.slug
                .toLowerCase()
                .includes(context!.searchTerm.toLowerCase())
            ) {
              return game;
            }
          })
          .map((game, index) => {
            return (
              <Card src={game.node.image.icon.src} slug={game.node.slug}></Card>
            );
          })}
      </GridView>
    </>
  );
};

export default Casino;
