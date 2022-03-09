import styled from "styled-components";
import CSS from "csstype";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCertificate,
  faDollarSign,
  faDice,
  faCoins,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const SortComponent = () => {
  const SortNav = styled.section`
    padding: 1em;
    background: #2f2f31;
    display: flex;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  `;

  const LinkStyle: CSS.Properties = {
    cursor: "pointer",
    textDecoration: "none",
    marginRight: "rem",
    fontSize: "1rem",
    color: "#ffffcc",
  };

  const LinkItem = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 3rem;
    margin-right: 2rem;
    color: #ffffcc;
  `;

  return (
    <>
      <SortNav>
        <LinkItem>
          <FontAwesomeIcon icon={faDice} style={{}} />
          <Link to="casino" style={LinkStyle}>
            Casino
          </Link>
        </LinkItem>
        <LinkItem>
          <FontAwesomeIcon icon={faDollarSign} />
          <Link to="jackpots" style={LinkStyle}>
            Jackpots
          </Link>
        </LinkItem>
        <LinkItem>
          <FontAwesomeIcon icon={faGamepad} />
          <Link to="games" style={LinkStyle}>
            All Games
          </Link>
        </LinkItem>
        <LinkItem>
          <FontAwesomeIcon icon={faCertificate} />
          <Link to="newest" style={LinkStyle}>
            Newest
          </Link>
        </LinkItem>
        <LinkItem>
          <FontAwesomeIcon icon={faCoins} />
          <Link to="playforfun" style={LinkStyle}>
            PlayForFun
          </Link>
        </LinkItem>
      </SortNav>
    </>
  );
};

export default SortComponent;
