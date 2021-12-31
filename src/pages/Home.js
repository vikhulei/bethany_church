import React from "react";
import HomeEng from "./eng/HomeEng";
import HomeUkr from "./ukr/HomeUkr";

const Home = ({ eng, mobileVersion }) => {
  return (
    <>
      {eng ? <HomeEng mobileVersion={mobileVersion} /> : <HomeUkr mobileVersion={mobileVersion} /> }
    </>
  );
};

export default Home;
