import React from "react";
import church_main from "../../assets/church_main_mobile.jpg";
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
  width: 100%;
  height: 100%;
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
  width: 100%;
  text-align: center;
  color: white;
`;

const Welcome = styled.p`
  font-family: "Rosarivo";
  font-size: calc(2rem + 5vw);
  /* line-height: 1; */
`;

const ComeAs = styled.p`
  font-family: "Rosarivo";
  font-size: calc(1rem + 5vw);
  font-style: italic;
`;

const BottomText = styled.div`
  position: absolute;
  bottom: 100px;
  width: 100%;
  color: white;
`;

const NoNeed = styled.p`
  font-family: "Rosarivo";
  font-size: calc(1rem + 1.2vw);
  text-align: center;
  text-shadow: 1px 1px 5px black, 1px 1px 5px black, 1px 1px 5px black,
    1px 1px 5px black;
`;

const HomeMobile = () => {
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

export default HomeMobile;
