import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";

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

const Products = ({filters, sort}) => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    const getProducts = async () => {
      try{
        const res = await axios.get(
          filters 
          ? `http://localhost:5000/api/products/?category=${filters}` 
          : "http://localhost:5000/api/products");
        setProducts(res.data);
      }catch(err){}
    };
    getProducts();
  },[filters]);

  useEffect(()=>{
    if(sort==="Newest"){
      setProducts(prev => [...prev].sort((a,b)=> a.createdAt - b.createdAt ));
    }
    else if(sort === "Asc"){
      setProducts(prev => [...prev].sort((a,b)=> a.price - b.price));
    }
    else {
      setProducts(prev => [...prev].sort((a,b)=> b.price - a.price));
    }
  },[sort]);

  return (
    <Parent>
    <Header>
      Most Sold Products of Last Week
    </Header>
    <Container>
      {products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  </Parent>
  );
};

export default Products;