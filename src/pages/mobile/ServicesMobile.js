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

const TitleWrapper = styled.div`
  margin-top: 20px;
  margin-left: 20px;
`;

const Title = styled.h1``;

const TextWrapper = styled.div`
  margin-top: 50px;
  width: 100vw;
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
      <TitleWrapper>
        <Title>
          Schedule
          <br />
          For
          <br />
          December
        </Title>
      </TitleWrapper>
      <TextWrapper>
        <Heading>Dec 10</Heading>
        <MainText>Is God always love? Reflection on Epistle of John</MainText>
        <Heading>Dec 17</Heading>
        <MainText>Is God always love? Reflection on Epistle of John</MainText>
        <Heading>Dec 24</Heading>
        <MainText>Is God always love? Reflection on Epistle of John</MainText>
        <Heading>Dec 31</Heading>
        <MainText>Is God always love? Reflection on Epistle of John</MainText>
      </TextWrapper>
    </>
  );
};

export default ServicesMobile;
