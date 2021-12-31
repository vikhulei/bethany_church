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

const HomeUkr = ({mobileVersion}) => {
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
        <Welcome>Завітайте</Welcome>
        <ComeAs>вам тут раді</ComeAs>
      </MainText>
      <BottomText>
        <NoNeed>
          Не потрібно бути ідеальним. <br /> Скажіть Йому, що у Вас на серці
        </NoNeed>
      </BottomText>
    </>
  );
};

export default HomeUkr;
