import React from "react";
import collage from "../../assets/collage.jpg";
import {Wrapper, TitleWrapper, Title, TextWrapper, Heading, MainText, PictureWrapper, Picture} from "../../../styled/mobile/AboutMobileEng"


const AboutMobileEng = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>About Us</Title>
      </TitleWrapper>
      <TextWrapper>
        <Heading>Affiliation</Heading>
        <MainText>Ukrainian Evangelical Church</MainText>
        <Heading>Brief History</Heading>
        <MainText>
          1994 - started by the students & faculty of the Bible school
          <br />
          1996 - moved to Nivki cinema theatre
          <br />
          2000 - moved to Expoplaza exhibition center
          <br />
          2005 - moved to Slavutych education center <br />
          2018 - moved to Florida hotel
        </MainText>
        <Heading>We Believe</Heading>
        <MainText>
          See{" "}
          <a
            href="https://en.wikipedia.org/wiki/Nicene_Creed#Comparison_between_creed_of_325_and_creed_of_381"
            target="_blank"
          >
            Nicene Creed
          </a>
        </MainText>
        <Heading>Bethany Today</Heading>
        <MainText>
          Small church of committed believers, dedicated to worship, Bible study
          and reaching out to the community
        </MainText>
      </TextWrapper>
      <PictureWrapper>
        <Picture src={collage} alt="collage" />
      </PictureWrapper>
    </Wrapper>
  );
};

export default AboutMobileEng;
