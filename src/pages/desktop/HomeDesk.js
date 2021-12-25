import React from "react";
import church_main from "../../../assets/church_main.jpg";
import bethany from "../../../assets/bethany.png";
import styled from "styled-components";

const MainPicture = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
`;

const MainPictureImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Logo = styled.img`
  position: absolute;
  top: 5px;
  left: 5px;
  width: 100px;
`;

const MainText = styled.div`
  position: absolute;
  top: 20vh;
  left: 10vw;
  color: white;
`;

const Welcome = styled.p`
  font-family: "Rosarivo";
  font-size: calc(2rem + 10vh);
`;

const ComeAs = styled.p`
  font-family: "Rosarivo";
  font-size: calc(1rem + 7vh);
  font-style: italic;
  margin: -20px 0 0 100px;
`;

const BottomText = styled.div`
  position: absolute;
  bottom: 5vh;
  width: 100%;
`;

const NoNeed = styled.p`
  font-family: "Rosarivo";
  font-size: calc(1rem + 2.5vh);
  color: white;
  margin-left: 100px;
  text-align: center;
  text-shadow: 1px 1px 5px black, 1px 1px 5px black, 1px 1px 5px black,
    1px 1px 5px black;
`;

const HomeDesk = () => {
  return (
    <>
      <MainPicture>
        <MainPictureImg src={church_main} alt="church_main" />
      </MainPicture>
      <Logo src={bethany} />
      <MainText>
        <Welcome>Welcome</Welcome>
        <ComeAs>come as you are</ComeAs>
      </MainText>
      <BottomText>
        <NoNeed>
          No need to get clever. Simply <br /> tell Him what you are up to
        </NoNeed>
      </BottomText>
    </>
  );
};

export default HomeDesk;
