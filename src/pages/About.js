import React from "react";
import AboutEng from "./eng/AboutEng";
import AboutUkr from "./ukr/AboutUkr";

const About = ({ eng, mobileVersion }) => {
  
  return (
    <>
      {eng ? <AboutEng />
      : <AboutUkr />
      }
    </>
  );
};

export default About;
