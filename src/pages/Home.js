import React from "react";
import HomeMobileEng from "../pages/eng/mobile/HomeMobileEng";
import HomeMobileUkr from "../pages/ukr/mobile/HomeMobileUkr";
import HomeDesk from "./desktop/HomeDesk";

const Home = ({ eng, mobileVersion }) => {
  
  return (
    <>
      {eng ? (
        mobileVersion ? (
          <HomeMobileEng />
        ) : (
          <HomeDesk />
        )
      ) : mobileVersion ? (
        <HomeMobileUkr />
      ) : (
        <HomeDesk />
      )}
    </>
  );
};

export default Home;
