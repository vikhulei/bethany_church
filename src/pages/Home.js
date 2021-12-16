import React from "react";
import church_main from "../assets/church_main.jpg";
import bethany from "../assets/bethany.png";
import calendar from "../assets/calendar.png";
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

const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 100px;
`;

const MainText = styled.div`
  position: absolute;
  top: 20vh;
  left: 10vw;
`;

const Welcome = styled.p`
  font-family: "Rosarivo";
  font-size: 5rem;
  color: white;
  line-height: 1;
`;

const ComeAs = styled.p`
  font-family: "Rosarivo";
  font-size: 3rem;
  font-style: italic;
  color: white;
  margin-left: 100px;
`;

const BottomText = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
`;

const NoNeed = styled.p`
  font-family: "Rosarivo";
  font-size: 2.3rem;
  color: white;
  margin-left: 100px;
  text-align: center;
  text-shadow: black 0px 0px 50px;
`;

const Home = () => {
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

export default Home;
