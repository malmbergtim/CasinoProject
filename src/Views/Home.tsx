import styled from "styled-components";
import useFetch from "../Hooks/UseFetch";
import Card from "../components/Card";
import CarouselComponent from "../components/CarouselComponent";
const GridView = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
  justify-items: center;
`;

const GridHeader = styled.h1`
  text-align: center;
  padding: 1.5rem;
  font-family: montserrat;
`;

const Home = () => {
  const { games } = useFetch(
    "https://www.leovegas.com/api/public-casino/bymarket/se"
  );

  console.log(games?.data.games);
  return (
    <>
      <GridHeader>Casino</GridHeader>
      <GridView>
        {games?.data.games[0].casino.edges.map((game) => {
          return (
            <Card src={game.node.image.icon.src} slug={game.node.slug}></Card>
          );
        })}
      </GridView>
      <GridHeader>Jackpots</GridHeader>
      <GridView>
        {games?.data.games[2].jackpots.edges.map((game) => {
          return (
            <Card src={game.node.image.icon.src} slug={game.node.slug}></Card>
          );
        })}
      </GridView>
      <GridHeader>Newest</GridHeader>
      <GridView>
        {games?.data.games[3].newest.edges.map((game) => {
          return (
            <Card src={game.node.image.icon.src} slug={game.node.slug}></Card>
          );
        })}
      </GridView>
      <GridHeader>PlayForFun Jackpot</GridHeader>
      <GridView>
        {games?.data.games[4].leojackpot.edges.map((game) => {
          return (
            <Card src={game.node.image.icon.src} slug={game.node.slug}></Card>
          );
        })}
      </GridView>
    </>
  );
};

export default Home;
