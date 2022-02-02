import styled from 'styled-components'
import img from '../images/PlayForFun4.png'
import react from 'react'
import CSS from 'csstype';
import {Link} from 'react-router-dom'


const imgStyle: CSS.Properties = {
    height: '10rem',
    margin: '0',
    position: 'absolute',
    top: '-30px'
}

const LinkStyle: CSS.Properties = {
    color: "black",
    cursor: "pointer",
    textDecoration: "none",
    marginRight: "2rem",
    fontSize: "1.2rem",
    fontFamily:  "Poppins"
}


const Navbar = () => {
    return(
        <NavHeader>
            <Logo href="#"><img src={img} style={imgStyle} alt="" /></Logo>
        <LinkMenu>
            <Link to="login" style={LinkStyle}>Log In</Link>
            <Link to="register" style={LinkStyle}>Register</Link>
            <Link to="games" style={LinkStyle}>Games</Link>
            <Link to="about" style={LinkStyle}>About</Link>
        </LinkMenu>
        </NavHeader>
    )
}


const LinkMenu = styled.ul`
    list-style-type: none;
    display: flex;


`;


// const MenuLink = styled.div`
//     color: black;
//     cursor: pointer;
//     text-decoration: none;
//     margin-right: 2rem;
//     font-size: 1.2rem;
//     font-family: 'Montserrat', sans-serif;

// `;


const Logo = styled.a`




`;


const NavHeader = styled.div`
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
`;











export default Navbar 