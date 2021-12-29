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
        January-22
      </Title>
      <TextWrapper>
        <Heading>Jan 8</Heading>
        <MainText>Is God always love? Reflection on Epistle of John</MainText>
        <Heading>Jan 15</Heading>
        <MainText>Sufferings for the faith today - First Peter</MainText>
        <Heading>Jan 22</Heading>
        <MainText>Thoughts about modern church from Second Peter</MainText>
        <Heading>Jan 29</Heading>
        <MainText>Epistle of Judah on heresies </MainText>
      </TextWrapper>
    </Wrapper>
  );
};

export default ServicesMobileEng;
