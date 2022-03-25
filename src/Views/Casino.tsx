
import Card from "../components/Card";
import styled from "styled-components";
import { useState, useContext } from "react";
import SearchComponent from "../components/searchComponent";

import { searchContext } from "../context /SearchContext";
import useFetchNewApi from "../Hooks/UseFetchNewApi";
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
  const { games } = useFetchNewApi(
    "http://192.168.1.112:8080/api/games/getByCategory/casino"
  );

  const context = useContext(searchContext);
  let count = 0;
  console.log("this is count" + count);

  return (
    <>
      <GridHeader>Casino</GridHeader>

      <SearchComponent title="casino" />

      <GridView>
       {
games!.filter((game) => {
  if (context!.searchTerm == "") {
    return game;
  } else if (
    game.slug
      .toLowerCase()
      .includes(context!.searchTerm.toLowerCase())
  ) {
    
    return game;
  }
}) .map((game) => {
            return(
             <Card src={game.imageSrc} slug={game.slug} gameId={game.id} gameUrl={game.urlSrc}></Card>
            )
          })

       }


      </GridView>
    </>
  );
};

export default Casino;
