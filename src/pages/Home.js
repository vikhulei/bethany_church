import React from "react";
import HomeMobile from "../pages/eng/mobile/HomeMobileEng";
import HomeDesk from "./desktop/HomeDesk";

const Home = ({ mobileVersion }) => {
  return <>{mobileVersion ? <HomeMobile /> : <HomeDesk />}</>;
};

export default Home;
