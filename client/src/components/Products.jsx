import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Parent = styled.div`
background-color: #93FFD8;
`;

const Container = styled.div`
    padding: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Header = styled.h1`
text-align: center;
letter-spacing: 8px;
word-spacing: 12px;
font-size: 40px;
padding-top: 7%;
color: #533535;
font-weight: 900;
`;

const Products = () => {
  return (
    <Parent>
    <Header>
      Most Sold Products of Last Week
    </Header>
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  </Parent>
  );
};

export default Products;