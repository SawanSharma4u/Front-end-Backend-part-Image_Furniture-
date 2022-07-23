import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin-left: 25px;
  margin-right: 20px;
  position: relative;
`;

const Image = styled.img`
  width: 30vw;
  height: 40vh;
  border: 1px solid black;
  ${mobile({ height: "20vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity:0.4;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
    letter-spacing: 2px;
`;

const Button = styled.button`
    width: 100%;
    margin-top: 10px;
    border:none;
    padding: 10px;
    background-color: f5fafd;
    color:black;
    cursor: pointer;
    font-weight: 900;
    font-size: 15px;
    letter-spacing: 2px;
`;

const CategoriesItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
      </Info>
      <Button>SHOP NOW</Button>
    </Container>
  );
};

export default CategoriesItem;
