import React from "react";
import ServicesDesk from "./desktop/ServicesDesk";
import ServicesMobile from "./mobile/ServicesMobile";

const Services = ({ mobileVersion }) => {
  return <div>{mobileVersion ? <ServicesMobile /> : <ServicesDesk />}</div>;
};

export default Services;
