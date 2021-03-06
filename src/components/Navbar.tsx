import styled from "styled-components";
import img from "../images/PlayForFun4.png";
import react from "react";
import CSS from "csstype";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../context /UserContext";
import { useNavigate } from "react-router-dom";
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
  fontSize: "1.2rem",
};

const LogoutButton = styled.button`
 padding:0.35em 1.2em;

 margin:0 0.3em 0.3em 0;
 border-radius: 0.12em;
 box-sizing: border-box;
 text-decoration:none;
 color: #ffffcc;
 text-align:center;
 transition: all 0.2s;
background: #2f2f31;
`

const Navbar = () => {
  const context = useContext(userContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    context?.setLoggedIn(false);
    navigate("/");
  };
  return (
    <>
      {context?.loggedIn ? (
        <NavHeader>
          <Logo href="#">
            <Link to="/">
              <img src={img} style={imgStyle} alt="" />
            </Link>
          </Logo>
          <LinkMenu>
            <Link to="games" style={LinkStyle}>
              Games
            </Link>

            <Link to="about" style={LinkStyle}>
              About
            </Link>
            <Link to="account" style={LinkStyle}>
              Account
            </Link>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          </LinkMenu>
        </NavHeader>
      ) : (
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
      )}
    </>
  );
};

export default Navbar;
