import React from "react";
import styled from "styled-components";
import collage from "../../assets/collage.jpg";

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
`;

const TextWrapper = styled.div`
  /* width: 100%;
  height: 100%;
  margin: 0 20px; */
`;

const Heading = styled.h2`
  font-size: calc(1.2rem);
  margin: 10px 0 2px;
`;

const MainText = styled.p`
  margin-left: 30px;
`;

const PhotoWrapper = styled.div`
  /* width: 100%;
  margin: 30px 20px; */
  /* justify-content: center; */
`;

const Photo = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const Test = styled.div`
  position: relative;
`;

const AboutDesk = () => {
  return (
    <Wrapper>
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
      <PhotoWrapper>
        <Photo src={collage} alt="collage" />
      </PhotoWrapper>
    </Wrapper>
  );
};

export default AboutDesk;
