import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import { categories } from "../data";
import CategoriesItem from "./CategoriesItem";
import { mobile } from "../responsive";

const Parent = styled.div`
background-color: #94B49F;
`

const Container = styled.div`
  width: 98vw;
  height: auto;
  padding-bottom: 8%;
  padding-top: 50px;
  position: relative;
  overflow: hidden;
  justify-content: space-between;
  align-item: center;
  ${mobile({ padding: "0px", flexDirection:"column" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 20%;
  left: ${(props) => props.direction === "left" && "40px"};
  right: ${(props) => props.direction === "right" && "20px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX( ${props => props.slideIndex * -33.33}vw );
`;

const Header = styled.h1`
    text-align: center;
    letter-spacing: 12px;
    font-size: 40px;
    padding-top: 7%;
`

const Categories = () => {
  const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0);
        }
    }
  return (
    <Parent>
        <Header>Categories</Header>
        <Container>
          <Arrow direction="left" onClick={() => handleClick("left")}>
              <ArrowLeftOutlined />
          </Arrow>
          <Wrapper slideIndex = {slideIndex}>
            {categories.map((item) => (
                <CategoriesItem item={item} key={item.id} />
            ))}
          </Wrapper>
          <Arrow direction="right"  onClick={() => handleClick("right")}>
              <ArrowRightOutlined />
          </Arrow>
            
        </Container>
    </Parent>
  );
};

export default Categories;