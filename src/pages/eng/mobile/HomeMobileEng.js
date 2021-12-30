import React from "react";
import church_main from "../../../assets/church_main_mobile.jpg";
import bethany from "../../../assets/bethany.png";
import {
  MainPicture,
  MainPictureImg,
  Logo,
  MainText,
  Welcome,
  ComeAs,
  BottomText,
  NoNeed
} from "../../../styled/pages/HomeStyled";

const HomeMobileEng = () => {

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

export default HomeMobileEng;
