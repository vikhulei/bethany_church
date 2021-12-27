import React from "react";
import styled from "styled-components";
import calendar from "../../assets/calendar.png";

const Wrapper = styled.div`
  min-height: calc(150vh);
  margin: 80px 10vw 0 10vw;
`;

const PictureWrapper = styled.div`
  position: absolute;
  width: 80%;
  text-align: center;
  margin: 0 auto;
`;

const Picture = styled.img`
  width: 100%;
  object-fit: contain;
  max-height: 100vh;
`;

const Title = styled.h1`
  position: relative;
  text-align: center;
  font-size: calc(2rem + 3vh);
  margin-bottom: -60px;
`;

const TextWrapper = styled.div`
  position: relative;
  margin: 100px 20px 50px 20px;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin: 50px 0 5px;
`;

const MainText = styled.p`
  font-size: 1.5rem;
  margin-left: 30px;
`;

const ServicesMobile = () => {
  return (
    <Wrapper>
      <PictureWrapper>
        <Picture src={calendar} alt="calendar" />
      </PictureWrapper>
      <Title>Schedule For December</Title>
      <TextWrapper>
        <Heading>Dec 10</Heading>
        <MainText>Is God always love? Reflection on Epistle of John</MainText>
        <Heading>Dec 17</Heading>
        <MainText>Sufferings for the faith today - First Peter</MainText>
        <Heading>Dec 24</Heading>
        <MainText>Thoughts about modern church from Second Peter</MainText>
        <Heading>Dec 31</Heading>
        <MainText>Epistle of Judah on heresies </MainText>
      </TextWrapper>
    </Wrapper>
  );
};

export default ServicesMobile;
