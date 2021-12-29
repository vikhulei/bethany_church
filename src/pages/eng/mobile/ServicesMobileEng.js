import React from "react";
import calendar from "../../assets/calendar.png";
import {Wrapper, PictureWrapper, Picture, Title, TextWrapper, Heading, MainText} from "../../../styled/mobile/ServicesMobileEng"


const ServicesMobileEng = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default ServicesMobileEng;
