import React from "react";
import styled from "styled-components";
import collage from "../../assets/collage.jpg";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  min-height: calc(100vh - 120px);
  margin: 80px 30px;
`;

const TextWrapper = styled.div`
  flex: 1;
  margin-right: 50px;
`;

const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: calc(2rem + 3vh);
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  margin: 30px 0 5px;
`;

const MainText = styled.p`
  font-size: 1.2rem;
  margin-left: 30px;
`;

const PhotoWrapper = styled.div`
  flex: 1;
`;

const Photo = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const AboutDesk = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <TitleWrapper>
          <Title>About Us</Title>
        </TitleWrapper>
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
      <PhotoWrapper>
        <Photo src={collage} alt="collage" />
      </PhotoWrapper>
    </Wrapper>
  );
};

export default AboutDesk;
