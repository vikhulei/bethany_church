import React from "react";
import AboutMobile from "./mobile/AboutMobile";
import AboutDesk from "./desktop/AboutDesk";

const About = ({ mobileVersion }) => {
  return <>{mobileVersion ? <AboutMobile /> : <AboutDesk />}</>;
};

export default About;
