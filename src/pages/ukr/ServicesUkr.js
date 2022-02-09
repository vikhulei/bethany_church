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

const ServicesUkr = () => {
  return (
    <Wrapper>
      <PictureWrapper>
        <Picture src={calendar} alt="calendar" />
      </PictureWrapper>
      <TitleWrapper>
      <Title>
        Розклад
        <br />
        Служінь в
        <br />
        Лютому 2022
      </Title>
      </TitleWrapper>
      <TextWrapper>
        <Heading>5 лютого</Heading>
        <MainText>
        Апостол Юда про єресі 
        </MainText>
        <Heading>12 лютого</Heading>
        <MainText>Договір між Богом і людьми - книга Єремії</MainText>
        <Heading>19 лютого</Heading>
        <MainText>Стрітення Господнє</MainText>
        <Heading>26 лютого</Heading>
        <MainText>Урок від Рут: чеснота вірності</MainText>
      </TextWrapper>
    </Wrapper>
  );
};

export default ServicesUkr;
