import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import Card from "../components/Card";
import img from "../images/PlayForFun4.png";

import { searchContext } from "../context /SearchContext";
import SearchComponent from "../components/searchComponent";

import useFetchNewApi from "../Hooks/UseFetchNewApi";
import { faEarthOceania } from "@fortawesome/free-solid-svg-icons";

const GridView = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 20px;
  justify-content: center;
`;

const GridHeader = styled.h1`
  text-align: center;
  padding: 1.5rem;
`;

const Games = () => {
  const { games } = useFetchNewApi(
    "http://192.168.1.112:8080/api/games"
  );



  console.log("hello this is games", games);
  const context = useContext(searchContext);
    const [videogame, addVideoGame] = useState([])
  // games?.data.games[3].newest.edges &&
  //         games?.data.games[4].leojackpot.edges



  return (
    <>
      <GridHeader>All Games</GridHeader>
      <SearchComponent title="All Games"></SearchComponent>
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

        
        /* {games?.data.games[0].casino.edges

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
          .map((game, index) => {
            return (
              <Card src={game.node.image.icon.src} slug={game.node.slug} id={index}></Card>
            );
          })}

        {games?.data.games[4].leojackpot.edges

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
          })} */

        
          
          
          }

          
          
      
         
      </GridView>
    </>
  );
};

export default Games;
