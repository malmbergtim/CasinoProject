import styled from "styled-components";
import Card from "../components/Card";
import CarouselComponent from "../components/CarouselComponent";
import SortComponent from "../components/SortComponent";
import { useState, useRef } from "react";
import { useContext, useEffect } from "react";
import { userContext } from "../context /UserContext";
import "./homeStyling.css";
import useFetchNewApi from "../Hooks/UseFetchNewApi";

const GridView = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 20px;
  justify-content: center;
`;

const GridHeader = styled.h1`
  text-align: center;
  padding: 1.5rem;
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

const Home = () => {
  const context = useContext(userContext);
  useEffect(() => {
    const userData = localStorage.getItem("user-info");
    const accountInfo = JSON.parse(userData!);

    context?.setRegisterUser(accountInfo);
  }, []);

  console.log("hello from home", context?.user)


 

  const { casino } = useFetchNewApi(
    "http://192.168.1.112:8080/api/games/getByCategory/casino"
  );

  const { jackpots } = useFetchNewApi(
    "http://192.168.1.112:8080/api/games/getByCategory/jackpots"
  );

  const { newest } = useFetchNewApi(
    "http://192.168.1.112:8080/api/games/getByCategory/newest"
  );

  const { leojackpot } = useFetchNewApi(
    "http://192.168.1.112:8080/api/games/getByCategory/leojackpot"
  );




  const [showAllCasino, setShowAllCasino] = useState(false);
  const [showAllJackpots, setShowAllJackpots] = useState(false);
  const [showAllNewest, setShowNewest] = useState(false);
  const [showAllPlayForFun, setShowAllPlayForFun] = useState(false);

  const [styleCasino, setStyleCasino] = useState("showMoreButton");
  const [styleJackpot, setStyleJackpots] = useState("showMoreButton");
  const [styleNewest, setStyleNewest] = useState("showMoreButton");

  const [stylePlayForFun, setStylePlayForFun] = useState("showMoreButton");

  return (
    <>

      
      <GridHeader id="casino">Casino</GridHeader>

      <GridView>
        {casino!.slice(0, 5).map((game, index) => {
          return (
            <Card src={game.imageSrc} slug={game.slug} id={game.id}></Card>
          );
        })}
        {showAllCasino &&
          casino!.slice(5).map((game, index) => {
            return (
              <Card src={game.imageSrc} slug={game.slug} id={game.id}></Card>
            );
          })}
      </GridView>

      {/* show all casino */}
      <ButtonContainer>
        <button
          className={styleCasino}
          onClick={() => {
            setShowAllCasino(true);
            setStyleCasino("removeButtonCasino");
          }}
        >
          Show More{" "}
        </button>
      </ButtonContainer>

      <GridHeader id="jackpots">Jackpots</GridHeader>
      <GridView>
      {jackpots!.slice(0, 5).map((game, index) => {
          return (
            <Card src={game.imageSrc} slug={game.slug} id={game.id}></Card>
          );
        })}
        {showAllJackpots &&
          jackpots!.slice(5).map((game, index) => {
            return (
              <Card src={game.imageSrc} slug={game.slug} id={game.id}></Card>
            );
          })}
      </GridView>
 
      <ButtonContainer>
        <button
          className={styleJackpot}
          onClick={() => {
            setShowAllJackpots(true);
            setStyleJackpots("removeButtonJackpots");
          }}
        >
          Show More{" "}
        </button>
      </ButtonContainer>

      <GridHeader id="newest">Newest</GridHeader>
      <GridView>
      {newest!.slice(0, 5).map((game, index) => {
          return (
            <Card src={game.imageSrc} slug={game.slug} id={game.id}></Card>
          );
        })}
        {showAllNewest &&
          newest!.slice(5).map((game, index) => {
            return (
              <Card src={game.imageSrc} slug={game.slug} id={game.id}></Card>
            );
          })}
      </GridView>
      {/* show all casino */}
      <ButtonContainer>
        <button
          className={styleNewest}
          onClick={() => {
            setShowNewest(true);
            setStyleNewest("removeButtonNewest");
          }}
        >
          Show More{" "}
        </button>
      </ButtonContainer>
      <GridHeader>PlayForFun Jackpot</GridHeader>
      <GridView id="playforfunjackpots">
      {leojackpot!.slice(0, 5).map((game, index) => {
          return (
            <Card src={game.imageSrc} slug={game.slug} id={game.id}></Card>
          );
        })}
        {showAllPlayForFun &&
          leojackpot!.slice(5).map((game, index) => {
            return (
              <Card src={game.imageSrc} slug={game.slug} id={game.id}></Card>
            );
          })}
      </GridView>
      {/* show all casino */}
      <ButtonContainer>
        <button
          className={stylePlayForFun}
          onClick={() => {
            setShowAllPlayForFun(true);
            setStylePlayForFun("removeButtonPlayForFun");
          }}
        >
          Show More{" "}
        </button>
      </ButtonContainer>
    </>
  );
};

export default Home;
