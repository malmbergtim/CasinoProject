import styled from "styled-components";
import useFetch from "../Hooks/UseFetch";
import Card from "../components/Card";
import CarouselComponent from "../components/CarouselComponent";
import SortComponent from "../components/SortComponent";
import { useState, useRef } from "react";
import "./homeStyling.css";

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
  const { games } = useFetch(
    "https://www.leovegas.com/api/public-casino/bymarket/se"
  );

  const [showAllCasino, setShowAllCasino] = useState(false);
  const [showAllJackpots, setShowAllJackpots] = useState(false);
  const [showAllNewest, setShowNewest] = useState(false);
  const [showAllPlayForFun, setShowAllPlayForFun] = useState(false);

  const [styleCasino, setStyleCasino] = useState("showMoreButton");
  const [styleJackpot, setStyleJackpots] = useState("showMoreButton");
  const [styleNewest, setStyleNewest] = useState("showMoreButton");

  const [stylePlayForFun, setStylePlayForFun] = useState("showMoreButton");

  console.log(games?.data.games);
  return (
    <>
      <GridHeader id="casino">Casino</GridHeader>

      <GridView>
        {games?.data.games[0].casino.edges.slice(0, 5).map((game, index) => {
          return (
            <Card src={game.node.image.icon.src} slug={game.node.slug}></Card>
          );
        })}
        {showAllCasino &&
          games?.data.games[0].casino.edges.slice(5).map((game, index) => {
            return (
              <Card src={game.node.image.icon.src} slug={game.node.slug}></Card>
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
        {games?.data.games[2].jackpots.edges.slice(0, 5).map((game) => {
          return (
            <Card src={game.node.image.icon.src} slug={game.node.slug}></Card>
          );
        })}
        {showAllJackpots &&
          games?.data.games[2].jackpots.edges.slice(5).map((game, index) => {
            return (
              <Card src={game.node.image.icon.src} slug={game.node.slug}></Card>
            );
          })}
      </GridView>
      {/* show all casino */}
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
        {games?.data.games[3].newest.edges.slice(0, 5).map((game) => {
          return (
            <Card src={game.node.image.icon.src} slug={game.node.slug}></Card>
          );
        })}
        {showAllNewest &&
          games?.data.games[3].newest.edges.slice(5).map((game, index) => {
            return (
              <Card src={game.node.image.icon.src} slug={game.node.slug}></Card>
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
        {games?.data.games[4].leojackpot.edges.slice(0, 5).map((game) => {
          return (
            <Card src={game.node.image.icon.src} slug={game.node.slug}></Card>
          );
        })}
        {showAllPlayForFun &&
          games?.data.games[4].leojackpot.edges.slice(5).map((game, index) => {
            return (
              <Card src={game.node.image.icon.src} slug={game.node.slug}></Card>
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
