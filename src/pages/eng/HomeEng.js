import React from "react";
import church_main from "../../assets/church_main.jpg";
import church_main_mobile from "../../assets/church_main_mobile.jpg";
import bethany from "../../assets/bethany.png";
import {
  MainPicture,
  MainPictureImg,
  Logo,
  MainText,
  Welcome,
  ComeAs,
  BottomText,
  NoNeed
} from "../../styled/pages/HomeStyled";

const HomeEng = ({mobileVersion}) => {

  return (
    <>
      <MainPicture>
        {mobileVersion
        ? <MainPictureImg src={church_main_mobile} alt="church_main_mobile" />
        : <MainPictureImg src={church_main} alt="church_main_mobile" />
      }
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

export default HomeEng;
