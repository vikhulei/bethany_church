import React from "react";
import styled from "styled-components";
import calendar from "../../assets/calendar.png";

const PictureWrapper = styled.div`
  position: absolute;
  text-align: center;
  margin-top: 30vw;
`;

const Picture = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Title = styled.h1`
  margin-top: 20px;
  margin-left: 20px;
  font-size: calc(2rem + 2vw);
`;

const TextWrapper = styled.div`
  margin: 100px 20px 50px 20px;
  text-align: center;
`;

const Heading = styled.h2``;

const MainText = styled.p`
  margin-bottom: 20px;
`;

const ServicesMobile = () => {
  return (
    <>
      <PictureWrapper>
        <Picture src={calendar} alt="calendar" />
      </PictureWrapper>
      <Title>
        Schedule
        <br />
        For
        <br />
        December
      </Title>
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
    </>
  );
};

export default ServicesMobile;
