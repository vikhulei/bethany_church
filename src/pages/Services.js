import React from "react";
import ServicesMobileEng from "../pages/eng/mobile/ServicesMobileEng";
import ServicesMobileUkr from "../pages/ukr/mobile/ServicesMobileUkr";
import ServicesDesk from "./desktop/ServicesDesk";

const Services = ({ eng, mobileVersion }) => {
  
  return (
    <>
      {eng ? (
        mobileVersion ? (
          <ServicesMobileEng />
        ) : (
          <ServicesDesk />
        )
      ) : mobileVersion ? (
        <ServicesMobileUkr />
      ) : (
        <ServicesDesk />
      )}
    </>
  );
};

export default Services;
