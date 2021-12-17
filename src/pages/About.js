import React from "react";
import styled from "styled-components";
import collage from "../assets/collage.jpg";

const TextWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: lightblue;
`;

const PhotoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Photo = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

const About = () => {
  return (
    <>
      <TextWrapper></TextWrapper>
      <PhotoWrapper>
        <Photo src={collage} alt="collage" />
      </PhotoWrapper>
    </>
  );
};

export default About;
