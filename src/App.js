import React, { useEffect, useState } from "react";
import "./styles.css";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarEng from "./components/eng/NavbarEng";
import SidebarEng from "./components/eng/SidebarEng";
import NavbarUkr from "./components/ukr/NavbarUkr";
import SidebarUkr from "./components/ukr/SidebarUkr";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";
import Lang from "./components/Language";

const Wrapper = styled.div`
  background-color: lightgrey;
  overflow-y: scroll;
`;

const Pages = styled.div``;

export default function App() {
  const [mobileVersion, setMobileVersion] = useState(true);
  const [sideBar, setSideBar] = useState(false);
  const [eng, setEng] = useState(false);

  const showSideBar = () => {
    setSideBar(!sideBar);
  };

  const hideSideBar = () => {
    setSideBar(false);
  };

  const setEnglish = () => {
    setEng(!eng);
  };

  const handleResize = () => {
    if (window.innerWidth > 600) {
      setMobileVersion(false);
    } else {
      setMobileVersion(true);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Wrapper className="App">
      <Lang setEnglish={setEnglish} />
      <Router>
        {mobileVersion ? ( eng ?
          <SidebarEng sideBar={sideBar} showSideBar={showSideBar} />
        : <SidebarUkr sideBar={sideBar} showSideBar={showSideBar} />) : ( eng ? 
          <NavbarEng mobileVersion={mobileVersion} />
          : <NavbarUkr mobileVersion={mobileVersion} />
        )}
        <Pages onClick={hideSideBar}>
          <Routes>
            <Route
              exact
              path="/"
              element={<Home mobileVersion={mobileVersion} eng={eng} />}
            />
            <Route
              path="/pages/home"
              element={<Home mobileVersion={mobileVersion} eng={eng} />}
            />
            <Route
              path="/pages/about"
              element={<About mobileVersion={mobileVersion} eng={eng} />}
            />
            <Route
              path="/pages/services"
              element={<Services mobileVersion={mobileVersion} eng={eng} />}
            />
            <Route
              path="/pages/contacts"
              element={<Contacts mobileVersion={mobileVersion} eng={eng} />}
            />
          </Routes>
        </Pages>
      </Router>
    </Wrapper>
  );
}
