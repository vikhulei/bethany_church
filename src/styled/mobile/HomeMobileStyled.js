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
