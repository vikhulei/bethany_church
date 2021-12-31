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
  left: 10vw;
  color: white;
  @media screen and (max-width: 600px) {
    left: 0;
    width: 100%;
    text-align: center;
  }
`;

const Welcome = styled.p`
  font-size: calc(2rem + 10vh);
  @media screen and (max-width: 600px) {
    font-size: calc(2rem + 5vw);
  }
`;

const ComeAs = styled.p`
  font-size: calc(1rem + 7vh);
  font-style: italic;
  margin: -20px 0 0 100px;
  @media screen and (max-width: 600px) {
    font-size: calc(1rem + 5vw);
    margin: 0;
  }
`;

const BottomText = styled.div`
  position: absolute;
  bottom: 5vh;
  width: 100%;
  @media screen and (max-width: 600px) {
    bottom: 100px;
    width: 100%;
    color: white;
  }
`;

const NoNeed = styled.p`
  font-size: calc(1rem + 2.5vh);
  color: white;
  margin-left: 100px;
  text-align: center;
  text-shadow: 1px 1px 5px black, 1px 1px 5px black, 1px 1px 5px black,
    1px 1px 5px black;
  @media screen and (max-width: 600px) {
    margin-left: 0;
    font-size: calc(1rem + 1.2vw);
  }
`;

export {
  MainPicture,
  MainPictureImg,
  Logo,
  MainText,
  Welcome,
  ComeAs,
  BottomText,
  NoNeed
};
