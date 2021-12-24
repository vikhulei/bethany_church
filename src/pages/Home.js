import React from "react";
import HomeMobile from "./mobile/HomeMobile";
import HomeDesk from "./desktop/HomeDesk";

const Home = ({ mobileVersion }) => {
  return <>{mobileVersion ? <HomeMobile /> : <HomeDesk />}</>;
};

export default Home;
