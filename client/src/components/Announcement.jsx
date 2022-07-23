import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #ECB390;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 900;
  letter-spacing: 1.5px;
`;

const Announcement = () => {
  return <Container>Super Deal! 10% Extra Discount on Orders Over $500</Container>;
};

export default Announcement;