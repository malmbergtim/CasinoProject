import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import intro from "./../images/Välkomsterbjudande.gif";
import hyperNova from "./../images/Hypernova.jpg";
import hyperStrike from "./../images/Hyperstrike.jpg";
import gonzos from "./../images/gonzos.jpg";
import { Link } from "react-router-dom";
import "./CarouselStyling.css";

const LinkStyle = {
  color: "black",
  cursor: "pointer",
  textDecoration: "none",
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
  top: -400px;
  left: 5%;
  font-size: 1.5rem;
  font-family: montserrat;
  font-weight: bold;
`;

const RegisterButton = styled.button`
  background: #ffc300;
  font-size: 1.5rem;
  font-family: montserrat;
  border-radius: 5px;
  padding: 0.5em;
  margin-top: 1rem;
`;

const CarouselComponent = () => {
  return (
    <>
      <Carousel
        isRTL={false}
        itemsToShow={1}
        showArrows={false}
        enableAutoPlay={true}
        itemPadding={[0, 0, 0, 0]}
        autoPlaySpeed={5000}
      >
        <Item>
          <ItemImg src={intro}></ItemImg>
          <ErbjudandeContainer>
            <h1 style={{ color: "#ffc300" }}>Välkomsterbjudande</h1>
            <p style={{ color: "#ffc300" }}>
              100 Free spins direkt efter din registering
            </p>
            <RegisterButton>
              <Link to="register" style={LinkStyle}>
                Registera
              </Link>
            </RegisterButton>
          </ErbjudandeContainer>
        </Item>
        <Item>
          <ItemImg src={hyperNova}></ItemImg>
        </Item>
        <Item>
          <ItemImg src={hyperStrike}></ItemImg>
        </Item>
        <Item>
          <ItemImg src={gonzos}></ItemImg>
        </Item>
      </Carousel>
    </>
  );
};

export default CarouselComponent;