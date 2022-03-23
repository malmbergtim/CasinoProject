
import Card from "../components/Card";
import styled from "styled-components";
import { useContext } from "react";
import { searchContext } from "../context /SearchContext";
import SearchComponent from "../components/searchComponent";
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

const Newest = () => {
  const { games } = useFetchNewApi(
    "http://192.168.1.112:8080/api/games/getByCategory/newest"
  );
  const context = useContext(searchContext);
  return (
    <>
      <GridHeader>Newest</GridHeader>
      <SearchComponent title="Newest"></SearchComponent>
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
             <Card src={game.imageSrc} slug={game.slug} id={game.id}></Card>
            )
          })

       }
      </GridView>
    </>
  );
};

export default Newest;
