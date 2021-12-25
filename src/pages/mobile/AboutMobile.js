import React from "react";
import styled from "styled-components";
import collage from "../../assets/collage.jpg";

const PageWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  height: fit-content;
`;

const TitleWrapper = styled.div`
  margin-left: 20px;
`;

const Title = styled.h1`
  font-size: calc(2rem + 2vw);
`;

const TextWrapper = styled.div`
  margin: 20px;
`;

const Heading = styled.h2`
  font-size: calc(1.2rem);
  margin: 10px 0 2px;
`;

const MainText = styled.p`
  margin-left: 30px;
`;

const PictureWrapper = styled.div`
  margin: 20px;
  justify-content: center;
`;

const Picture = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const AboutMobile = () => {
  return (
    <PageWrapper>
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
    </PageWrapper>
  );
};

export default AboutMobile;
