import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import intro from "./../images/Välkomsterbjudande.gif";
import hyperNova from "./../images/Hypernova.jpg";
import hyperStrike from "./../images/Hyperstrike.jpg";
import gonzos from "./../images/gonzos.jpg";
import { Link } from "react-router-dom";
import "./CarouselStyling.css";
import { useContext } from "react";
import { userContext } from "../context /UserContext";

const LinkStyle = {
  color: "black",
  cursor: "pointer",
  textDecoration: "none",
  fontFamily: "Poppins",
};

const Item = styled.div`
  width: 100%;
`;

const ItemImg = styled.img`
  width: 100%;
  height: 600px;
  object-fit: cover;
`;

const ErbjudandeContainer = styled.div`
  position: relative;
  top: -500px;
  left: 5%;
  font-size: 1.3rem;
  font-family: montserrat;
  font-weight: bold;
`;

const Button = styled.button`
 
  padding:0.35em 1.2em;
  border:0.1em solid #ffffcc;
  margin: 0.5rem 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration:none;
  text-align:center;
  transition: all 0.2s;
  background-color: #ffffcc;
  }
`;

const PlayGameContainer = styled.div`
  position: relative;
  top: -22%;
  left: 45%;
`;



const CarouselComponent = () => {

  const context = useContext(userContext);

  return (
    <>
      
      { context?.loggedIn ?

        <Carousel
        isRTL={false}
        itemsToShow={1}
        showArrows={false}
        enableAutoPlay={true}
        itemPadding={[0, 0, 0, 0]}
        autoPlaySpeed={9000}
      >
        <Item>
          <ItemImg src={intro}></ItemImg>
          <ErbjudandeContainer>
            <h1 style={{ color: "#ffffcc" }}>Välkommen tillbaka {context?.user?.firstName}</h1>
            <p style={{ color: "#ffffcc" }}>
              Spela dina favoriter nu
            </p>
            <Button>
              <Link to="favorites" style={LinkStyle}>
                Favoriter
              </Link>
            </Button>
          </ErbjudandeContainer>
        </Item>
        <Item>
          <ItemImg src={hyperNova}></ItemImg>
          <PlayGameContainer>
            <Button>
              <Link to="hypernova" style={LinkStyle}>
                Spela
              </Link>
            </Button>
          </PlayGameContainer>
        </Item>
        <Item>
          <ItemImg src={hyperStrike} />
        </Item>
        <Item>
          <ItemImg src={gonzos}></ItemImg>
        </Item>
      </Carousel>


      
        :   

        <Carousel
        isRTL={false}
        itemsToShow={1}
        showArrows={false}
        enableAutoPlay={true}
        itemPadding={[0, 0, 0, 0]}
        autoPlaySpeed={9000}
      >
        <Item>
          <ItemImg src={intro}></ItemImg>
          <ErbjudandeContainer>
            <h1 style={{ color: "#ffffcc" }}>Välkomsterbjudande</h1>
            <p style={{ color: "#ffffcc" }}>
              100 Free spins direkt efter din registering
            </p>
            <Button>
              <Link to="register" style={LinkStyle}>
                Registera
              </Link>
            </Button>
          </ErbjudandeContainer>
        </Item>
        <Item>
          <ItemImg src={hyperNova}></ItemImg>
          <PlayGameContainer>
            <Button>
              <Link to="hypernova" style={LinkStyle}>
                Spela
              </Link>
            </Button>
          </PlayGameContainer>
        </Item>
        <Item>
          <ItemImg src={hyperStrike} />
        </Item>
        <Item>
          <ItemImg src={gonzos}></ItemImg>
        </Item>
      </Carousel>


      }
    </>
  );
};

export default CarouselComponent;
