import { useContext, useEffect } from "react";
import { userContext } from "../context /UserContext";
import { FavoritesContext } from "../context /FavoritesContext";
import styled from "styled-components";
import Card from "../components/Card";
import useFetchNewApi from "../Hooks/UseFetchNewApi";

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
    const user = useContext(userContext)
    const favcontext = useContext(FavoritesContext);

    const { favorites } = useFetchNewApi(
      `http://192.168.1.112:8080/api/user/${context?.user?.id}/games/`,
    );
  
    // useEffect(() => {
    //   const userData = localStorage.getItem("user-info");
    //   const accountInfo = JSON.parse(userData!);
  
    //     console.log(accountInfo);
      
    // }, []);

    // const isFound = context?.user?.gamesList.some(element => {
    //   if (element.id === gameId ) {
    //     return true;
    //   }
    // });
  
    return(
        <>
        <GridHeader>Your Favorites</GridHeader>
        <GridView>
         {
         
         favorites!.map((game, index) => {
          return (
            <Card src={game.imageSrc} slug={game.slug} gameId={game.id} gameUrl={game.urlSrc}></Card>
          );
        })}
        </GridView>
        </>
    )
}




export default Favorites