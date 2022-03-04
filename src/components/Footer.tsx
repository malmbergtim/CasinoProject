import styled from "styled-components";

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
      </FooterContainer>
    </>
  );
};

export default Footer;
