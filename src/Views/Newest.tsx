import useFetch from "../Hooks/UseFetch";
import Card from "../components/Card";
import styled from "styled-components";
import { useContext } from "react";
import { searchContext } from "../context /SearchContext";
import SearchComponent from "../components/searchComponent";
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
  const { games } = useFetch(
    "https://www.leovegas.com/api/public-casino/bymarket/se"
  );
  const context = useContext(searchContext);
  return (
    <>
      <GridHeader>Newest</GridHeader>
      <SearchComponent title="Newest"></SearchComponent>
      <GridView>
        {games?.data.games[3].newest.edges
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

export default Newest;
