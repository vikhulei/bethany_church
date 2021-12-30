import React from "react";
import collage from "../../../assets/collage.jpg";
import {
  Wrapper,
  TitleWrapper,
  Title,
  TextWrapper,
  Heading,
  MainText,
  PictureWrapper,
  Picture
} from "../../../styled/mobile/AboutMobileStyled";

const AboutMobileUkr = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Про нас</Title>
      </TitleWrapper>
      <TextWrapper>
        <Heading>Об'єднання</Heading>
        <MainText>Українська Євангельська Церква</MainText>
        <Heading>Історія коротко</Heading>
        <MainText>
          1994 - заснована викладачами і студентами Семінарії
          <br />
          1996 - служіння в кінотеатрі "Нивки"
          <br />
          2000 - служіння в виставковому центрі "Експоплаза"
          <br />
          2005 - служіння в учбовому центрі "Славутич" <br />
          2018 - служіння в готелі "Флорида"
        </MainText>
        <Heading>Ми віримо</Heading>
        <MainText>
          Див.{" "}
          <a
            href="https://uk.wikipedia.org/wiki/%D0%9D%D1%96%D0%BA%D0%B5%D0%B9%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D1%81%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB_%D0%B2%D1%96%D1%80%D0%B8#%D0%9F%D0%B5%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%B4%D0%B8_%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%BE%D1%8E_%D0%BC%D0%BE%D0%B2%D0%BE%D1%8E"
            target="_blank"
          >
            Нікейський символ віри
          </a>
        </MainText>
        <Heading>Віфанія сьогодні</Heading>
        <MainText>
          Невелика громада християн, згуртована для молитви, вивчення Біблії та
          відкрита для допомоги тим, хто її потребує
        </MainText>
      </TextWrapper>
      <PictureWrapper>
        <Picture src={collage} alt="collage" />
      </PictureWrapper>
    </Wrapper>
  );
};

export default AboutMobileUkr;
