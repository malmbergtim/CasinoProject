import styled from "styled-components";

type cardProps = {
  src: string;
  slug: string;
};

const CardImg = styled.img`
  width: 100%;
  min-height: 25%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  text-align: center;
  margin-bottom: 3rem;
  border-radius: 10px;
`;

const CardText = styled.p`
  font-family: "Poppins";
  text-transform: capitalize;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 80%;
  left: 0;
  right: 0;
  text-align: center;
  font-weight: bold;
`;

const CardContainer = styled.div`
  position: relative;
`;

const removeDash = (str: string) => {
  return str.replaceAll("-", " ");
};

const Card = (props: cardProps) => {
  const { slug, src } = props;

  return (
    <>
      <CardContainer>
        <CardImg src={src} alt={slug}></CardImg>
        <CardText>{removeDash(slug)}</CardText>
      </CardContainer>
    </>
  );
};

export default Card;
