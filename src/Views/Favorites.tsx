import { useContext, useEffect } from "react";
import { userContext } from "../context /UserContext";
import { FavoritesContext } from "../context /FavoritesContext";
import styled from "styled-components";
import Card from "../components/Card";

const GridView = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  justify-content: center;
`;

const GridHeader = styled.h1`
  text-align: center;
  padding: 1.5rem;
`;




const Favorites = () => {
    const context = useContext(userContext);
    const favcontext = useContext(FavoritesContext);
    useEffect(() => {
      const userData = localStorage.getItem("user-info");
      const accountInfo = JSON.parse(userData!);
  
        console.log(accountInfo);
      
    }, []);
  
    return(
        <>
        <GridHeader>Your Favorites</GridHeader>
        <GridView>
         {context?.user?.gamesList.map((game, index) => {
          return (
            <Card src={game.imageSrc} slug={game.slug} gameId={game.id} gameUrl={game.urlSrc}></Card>
          );
        })}
        </GridView>
        </>
    )
}




export default Favorites