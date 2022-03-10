import styled from "styled-components";

type cardProps = {
  src: string;
  slug: string;
};

const CardImg = styled.img`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
`;

const CardText = styled.p`
  font-family: "Poppins";
  text-transform: capitalize;
  text-align: center;
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
