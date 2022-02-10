import styled from "styled-components";
import img from "../images/PlayForFun4.png";
import react from "react";
import CSS from "csstype";
import { Link } from "react-router-dom";

const LinkMenu = styled.ul`
  list-style-type: none;
  display: flex;
`;

const Logo = styled.a``;

const NavHeader = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
`;

const imgStyle: CSS.Properties = {
  height: "10rem",
  margin: "0",
  position: "absolute",
  top: "-30px",
};

const LinkStyle: CSS.Properties = {
  color: "black",
  cursor: "pointer",
  textDecoration: "none",
  marginRight: "2rem",
  fontSize: "1rem",
  fontFamily: "Montserrat",
};

const Navbar = () => {
  return (
    <NavHeader>
      <Logo href="#">
        <Link to="/">
          <img src={img} style={imgStyle} alt="" />
        </Link>
      </Logo>
      <LinkMenu>
        <Link to="login" style={LinkStyle}>
          Log In
        </Link>
        <Link to="register" style={LinkStyle}>
          Register
        </Link>
        <Link to="games" style={LinkStyle}>
          Games
        </Link>
        <Link to="about" style={LinkStyle}>
          About
        </Link>
      </LinkMenu>
    </NavHeader>
  );
};

export default Navbar;
