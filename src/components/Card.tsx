import styled, {css} from "styled-components";

import {Link} from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar
} from "@fortawesome/free-solid-svg-icons";

import { useContext, useEffect, useRef} from "react";
import { userContext } from "../context /UserContext";

import {FavoritesContext} from "../context /FavoritesContext"

type cardProps = {
  src: string;
  slug: string;
  gameId: any;
  gameUrl: string;
};


type divInterface = {
  id: number;

}

const LinkStyle = {
  color: "#2f2f31",
  cursor: "pointer",
  textAlign: "center" as "center",
  textDecoration: "none",

  backgroundColor: "#ffffcc",
  width: "100%",
  
};

const PlayInfoFavoriteContainer = styled.div`
opacity: 0;
display: flex;
    width: 100%;
height: 1.5rem;
justify-content: space-between;
position: absolute;
bottom: 0
`


const CardImg = styled.img`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
 
`;

const CardText = styled.p`
  font-family: "Poppins";
  text-transform: capitalize;
  text-align: center;
`;

const CardContainer = styled.div`
  width: 100%;
 
`;

const removeDash = (str: string) => {
  return str.replaceAll("-", " ");
};






// const ImageContainer = styled.div<cardProps>
// `
// width: 100%;
// height: 100%;
// background: ${(cardProps) => `url(${cardProps.src}) no-repeat`};
// background-size: cover;
// display: flex;
// align-items: end;
// `

const StarContainer = styled.div`
position: absolute;
right: 0;
margin-right: 0.5rem;
opacity: 0;

`

const RandomContainer = styled.div`
  position: relative;

  &:hover ${PlayInfoFavoriteContainer} {
    opacity: 1;
    transition: all 0.5s;
  }

  &:hover ${StarContainer} {
    opacity: 1;
    transition: all 0.5s;
  }

`




const Card = (props: cardProps) => {
  const { slug, src, gameUrl, gameId} = props;
  const context = useContext(userContext);
  const favsContext = useContext(FavoritesContext)
  const favorites = favsContext?.favs
  const user = context?.user;
   
  const handleFavorite =   (e: any) => {
  
   
    e.target.style.color = "yellow"
     fetch(
      `http://192.168.1.112:8080/api/user/${user?.id}/games/${gameId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      }
    ).then((res) => res.json())
    .then((data) => {
      console.log("Hello from", data);
      localStorage.setItem("user-info", JSON.stringify(data));
      localStorage.setItem("Favorites", JSON.stringify(favsContext?.favs))
      favsContext?.addFav([...favsContext.favs, gameId])
    } )
  }

  
  // useEffect(() => {
  //   const userData = localStorage.getItem("user-info");
  //   const accountInfo = JSON.parse(userData!);

  //  const UserInfo = context?.setRegisterUser(accountInfo);
  //  const favsData = localStorage.getItem("Favorites");
  //  const FavsArray= JSON.parse(favsData!);

  // }, []);

 

    const favsArray = favsContext?.favs

    const handleRemoveFavorite =  (e: any) => {
      
      e.target.style.color = "black"
    fetch(
      `http://192.168.1.112:8080/api/user/${user?.id}/games/${gameId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      }
    ).then((res) => res.json())
    .then((data) => {
      console.log(data)
    } )
      
    }

    const isFound = context?.user?.gamesList.some(element => {
      if (element.id === gameId ) {
        return true;
      }
    });

  return (
    <>
      <CardContainer>
        
     
    
        
        <RandomContainer>
          
        <StarContainer>
        { 
                    isFound ? 
          <FontAwesomeIcon style={{color: "yellow"}}id={gameId} icon={faStar} onClick={handleRemoveFavorite}/>
          :
          <FontAwesomeIcon style={{color: "black" }}icon={faStar} onClick={handleFavorite}/>
        }
          
         </StarContainer>
        <CardImg src={src} alt={slug}></CardImg>
        <PlayInfoFavoriteContainer>
        <a href={gameUrl} style={LinkStyle}>Play</a>
        <Link to="/gameinfo" style={LinkStyle}>Info</Link></PlayInfoFavoriteContainer>  
        
        </RandomContainer> 
      
         
        <CardText>{removeDash(slug)}</CardText>
        
      </CardContainer>
    </>
  );
};

export default Card;
