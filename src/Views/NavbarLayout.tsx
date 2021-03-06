import Navbar from "../components/Navbar";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import CarouselComponent from "../components/CarouselComponent";
import SortComponent from "../components/SortComponent";

const Wrapper = styled.section`
  padding: 2em;
  background: #ffffcc;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Container = styled.div`
  height: 100%;
  margin-top: 15px;
  padding-right: 100px;
  padding-left: 100px;
  margin-right: auto;
  margin-left: auto;
`;

const NavbarLayout = () => {
  return (
    <>
      <Wrapper>
        <Navbar />
      </Wrapper>

      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default NavbarLayout;
