import React from "react";
import AboutMobileEng from "../pages/eng/mobile/AboutMobileEng";
import AboutMobileUkr from "../pages/ukr/mobile/AboutMobileUkr";
import AboutDesk from "./desktop/AboutDesk";

const About = ({ eng, mobileVersion }) => {
  
  return (
    <>
      {eng ? (
        mobileVersion ? (
          <AboutMobileEng />
        ) : (
          <AboutDesk />
        )
      ) : mobileVersion ? (
        <AboutMobileUkr />
      ) : (
        <AboutDesk />
      )}
    </>
  );
};

export default About;
