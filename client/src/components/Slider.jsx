import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import {sliderItems} from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: auto;
  max-height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  padding-bottom: 0px;
  ${mobile({ display: "none" })}
`;

const Parent = styled.div`
  padding: 40px 10px 100px 10px;
  background-color: #FFF8F3;  
`

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
  bottom: 2%;
  left: ${(props) => props.direction === "left" && "20px"};
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
  transform: translateX( ${props => props.slideIndex * -100}vw );
`;

const Slide = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #${props=> props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  width: 100%;
  flex: 2;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  padding: 2%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
    font-size: 4rem;
`;

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Slider = () => {

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
      <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex = {slideIndex}>
        {sliderItems.map((item) => {
            return <Slide bg={item.bg} key = {item.id} >
                <ImgContainer>
                    <Image src= {item.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>
                        {item.title}
                    </Title>
                    <Desc>
                        {item.desc} 
                    </Desc>
                    <Button>
                        CHECK OUT
                    </Button>
                </InfoContainer>
            </Slide>
        })}
        </Wrapper>
        <Arrow direction="right"  onClick={() => handleClick("right")}>
            <ArrowRightOutlined />
        </Arrow>
      </Container>
      </Parent>
    );
  };
  
  export default Slider;