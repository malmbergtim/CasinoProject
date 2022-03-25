import styled, {css} from "styled-components";

import {Link} from "react-router-dom";

type cardProps = {
  src: string;
  slug: string;
  gameId: number;
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

const RandomContainer = styled.div`
  position: relative;

  &:hover ${PlayInfoFavoriteContainer} {
    opacity: 1;
    transition: all 0.5s;
  }

`

const Card = (props: cardProps) => {
  const { slug, src, gameId, gameUrl} = props;
  
  return (
    <>
      <CardContainer>
        
     

        {/* <ImageContainer src={src} slug={slug} gameId={gameId}>  </ImageContainer> */}
        <RandomContainer>
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
