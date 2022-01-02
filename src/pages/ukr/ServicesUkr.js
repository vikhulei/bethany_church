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
        Січні 2022
      </Title>
      </TitleWrapper>
      <TextWrapper>
        <Heading>8 січня</Heading>
        <MainText>
          Чи завжди Бог любов? Роздуми над Першим Посланням Івана
        </MainText>
        <Heading>15 січня</Heading>
        <MainText>Страждання за віру сьогодні - Перше Петра</MainText>
        <Heading>22 січня</Heading>
        <MainText>Думки про сучасну Церкву з Другого Послання Петра</MainText>
        <Heading>29 січня</Heading>
        <MainText>Апостол Юда про єресі </MainText>
      </TextWrapper>
    </Wrapper>
  );
};

export default ServicesUkr;
