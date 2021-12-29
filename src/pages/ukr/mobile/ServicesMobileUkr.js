import React from "react";
import calendar from "../../assets/calendar.png";
import {Wrapper, PictureWrapper, Picture, Title, TextWrapper, Heading, MainText} from "../../../styled/mobile/ServicesMobileStyled"


const ServicesMobileUkr = () => {
  return (
    <Wrapper>
      <PictureWrapper>
        <Picture src={calendar} alt="calendar" />
      </PictureWrapper>
      <Title>
        Розклад
        <br />
        Служінь в
        <br />
        Січні 2022
      </Title>
      <TextWrapper>
        <Heading>8 січня</Heading>
        <MainText>Чи завжди Бог любов? Роздуми над Першим Посланням Івана</MainText>
        <Heading>15 січня</Heading>
        <MainText>Страждання за віру сьогодні - Перше Петра</MainText>
        <Heading>22 січня</Heading>
        <MainText>Думки про сучасну Церква з Другого Послання Петра</MainText>
        <Heading>29 січня</Heading>
        <MainText>Апостол Юда про єресі </MainText>
      </TextWrapper>
    </Wrapper>
  );
};

export default ServicesMobileUkr;
