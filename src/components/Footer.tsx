import styled from "styled-components";
import { Icon } from "./icons";

const FooterContainer = styled.section`
  position: absolute;
  bottom: 0;

  padding: 2em;
  background: #2f2f31;
  width: 100%;
`;
const Container = styled.div`
  position: relative;
  min-height: 70vh;
`;

const Footer = () => {
  return (
    <>
      <Container>
        <FooterContainer>
          <p style={{ color: "#ffffbc" }}>
            {" "}
            Play For Fun Project For LeoVegas Apprenticeship{" "}
          </p>
          <Icon />
        </FooterContainer>
      </Container>
    </>
  );
};

export default Footer;
