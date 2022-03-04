import useFetch from "../Hooks/UseFetch";
import Card from "../components/Card";
import styled from "styled-components";
const GridView = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
  justify-items: center;
`;

const GridHeader = styled.h1`
  text-align: center;
  padding: 1.5rem;
`;

const Jackpots = () => {
  const { games } = useFetch(
    "https://www.leovegas.com/api/public-casino/bymarket/se"
  );
  return (
    <>
      <GridHeader>Jackpots</GridHeader>
      <GridView>
        {games?.data.games[2].jackpots.edges.map((game) => {
          return (
            <Card src={game.node.image.icon.src} slug={game.node.slug}></Card>
          );
        })}
      </GridView>
    </>
  );
};

export default Jackpots;
