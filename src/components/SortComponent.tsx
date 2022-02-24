import styled from "styled-components";
import { Link } from "react-router-dom";
import CSS from "csstype";

const SortComponent = () => {
  const SortNav = styled.section`
    padding: 2em;
    background: black;
    display: flex;
    justify-content: center;
    color: white;
  `;

  const LinkStyle: CSS.Properties = {
    color: "white",
    cursor: "pointer",
    textDecoration: "none",
    marginRight: "2rem",
    fontSize: "1rem",
    fontFamily: "Montserrat",
  };

  return (
    <>
      <SortNav>
        <div>
          <Link to="#top" style={LinkStyle}>
            Casino{" "}
          </Link>
        </div>
        <Link to="top" style={LinkStyle}>
          Jackpots
        </Link>
        <Link to="top" style={LinkStyle}>
          New
        </Link>
      </SortNav>
    </>
  );
};

export default SortComponent;
