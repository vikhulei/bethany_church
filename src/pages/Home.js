import React from "react";
import HomeMobileEng from "../pages/eng/mobile/HomeMobileEng";
import HomeMobileUkr from "../pages/ukr/mobile/HomeMobileUkr";
import HomeDesk from "./desktop/HomeDesk";

const Home = ({ eng, mobileVersion }) => {
  console.log(eng);
  // const result = () => {
  //   if (eng) {
  //     if (mobileVersion) {
  //       return <HomeMobileEng />;
  //     } else {
  //       return <HomeDesk />;
  //     }
  //   } else {
  //     if (mobileVersion) {
  //       return <HomeMobileUkr />;
  //     } else {
  //       return <HomeDesk />;
  //     }
  //   }
  // };
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
