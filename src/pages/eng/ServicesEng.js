import React from "react";
import calendar from "../../assets/calendar.png";
import {
  Wrapper,
  PictureWrapper,
  Picture,
  TitleWrapper,
  TextWrapper,
} from "../../styled/pages/ServicesStyled";
import {Title, Heading, MainText} from "../../styled/pages/Common"

const ServicesEng = () => {
  return (
    <Wrapper>
      <PictureWrapper>
        <Picture src={calendar} alt="calendar" />
      </PictureWrapper>
      <TitleWrapper>
      <Title>
        Schedule
        <br />
        For
        <br />
        February-22
      </Title>
      </TitleWrapper>
      <TextWrapper>
        <Heading>Feb 5</Heading>
        <MainText>Epistle of Judah on heresies</MainText>
        <Heading>Feb 12</Heading>
        <MainText>Agreement between God and people - Book of Jeremiah</MainText>
        <Heading>Feb 19</Heading>
        <MainText>Presentation of the Lord</MainText>
        <Heading>Feb 26</Heading>
        <MainText>Lesson from Ruth: The virtue of faithfulness</MainText>
      </TextWrapper>
    </Wrapper>
  );
};

export default ServicesEng;
