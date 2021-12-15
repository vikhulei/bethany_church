import React from "react";
import church_main from "../assets/church_main.jpg";
import styled from "styled-components";

const MainPicture = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
`;

const MainPictureImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Home = () => {
  return (
    <>
      <MainPicture>
        <MainPictureImg src={church_main} alt="church_main" />
      </MainPicture>
    </>
  );
};

export default Home;
