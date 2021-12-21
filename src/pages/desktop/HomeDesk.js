import React from "react";
import church_main from "../../assets/church_main.jpg";
import bethany from "../../assets/bethany.png";
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
  font-size: calc(4rem + 3vw);
  /* line-height: 1; */
`;

const ComeAs = styled.p`
  font-family: "Rosarivo";
  font-size: calc(2rem + 2vw);
  font-style: italic;
  margin-left: 100px;
`;

const BottomText = styled.div`
  position: absolute;
  bottom: 50px;
  width: 100%;
`;

const NoNeed = styled.p`
  font-family: "Rosarivo";
  font-size: calc(1.5rem + 1vw);
  color: white;
  margin-left: 100px;
  text-align: center;
  text-shadow: black 0px 0px 50px;
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
