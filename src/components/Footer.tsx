import styled from "styled-components";
import { Icon } from "./icons";

const FooterContainer = styled.section`
  padding: 2em;
  background: #2f2f31;
  width: 100%;
  margin-top: 4rem;
`;

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <p style={{ color: "#ffffbc" }}>
          {" "}
          Play For Fun Project For LeoVegas Apprenticeship{" "}
        </p>
        <Icon />
      </FooterContainer>
    </>
  );
};

export default Footer;
