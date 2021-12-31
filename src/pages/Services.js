import React from "react";
import ServicesEng from "../pages/eng/ServicesEng";
import ServicesUkr from "../pages/ukr/ServicesUkr";

const Services = ({ eng }) => {
  
  return (
    <>
      {eng ? <ServicesEng /> :   <ServicesUkr /> }
    </>
  );
};

export default Services;
