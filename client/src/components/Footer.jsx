import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@material-ui/icons";
  import styled from "styled-components";
  import { mobile } from "../responsive";
  
  const Container = styled.div`
    display: flex;
    padding: 100px 20px 40px;
    background-color: #4D4C7D;
    ${mobile({ flexDirection: "column" })}
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px 80px 20px 30px;
    text-align: justify;
  `;
  
  const Logo = styled.h1`
  font-family: 'Dancing Script', cursive;
  color: white;
  font-size: 40px;
  font-weight: 900;
  `;
  
  const Desc = styled.p`
    margin: 20px 0px;
    color: #EEF3D2;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 1px;
  `;

  const Span = styled.span`
    font-family: 'Dancing Script', cursive;
    color: yellow;
  `
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding-top: 20px;
    ${mobile({ display: "none" })}
  `;
  
  const Title = styled.h3`
    color: white;
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    color: #EEF3D2;
    font-weight: 500;
    letter-spacing: 1px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding-left: 30px;
    padding-top: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    color: #EEF3D2;
    font-weight: 500;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo><Span>Image</Span> Furniture.</Logo>
          <Desc>
            we understand that we’re here not just to sell well-designed products. We’re
            here to help you create spaces that mirror who you are. At Urban Ladder, we want you
            to discover the joy of creating. Starting with your home..
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Bedroom</ListItem>
            <ListItem>Dinning</ListItem>
            <ListItem>Contact Us</ListItem>
            <ListItem>Privacy Policy</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> 622 Laxmi Park , New Delhi 110041
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +91 8700xxxxxx
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> sawansharmait@gmail.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;
  