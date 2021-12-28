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
} from "../../../styled/mobile/HomeMobileStyled";

const HomeMobileUkr = () => {
  return (
    <>
      <MainPicture>
        <MainPictureImg src={church_main} alt="church_main" />
      </MainPicture>
      <Logo src={bethany} />
      <MainText>
        <Welcome>Завітайте до нас</Welcome>
        <ComeAs>ми завжди вам раді</ComeAs>
      </MainText>
      <BottomText>
        <NoNeed>
          Не потрібно бути ідеальним. Скажіть <br /> йому те, що на думці
        </NoNeed>
      </BottomText>
    </>
  );
};

export default HomeMobileUkr;
