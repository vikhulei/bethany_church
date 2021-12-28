import React, { useEffect, useState } from "react";
import "./styles.css";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";
import Lang from "./pages/Language";

const Wrapper = styled.div`
  background-color: rgb(231, 214, 208);
  background-color: rgb(218, 170, 153);
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600) {
        setMobileVersion(false);
      } else {
        setMobileVersion(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Wrapper className="App">
      <Lang setEnglish={setEnglish} />
      <Router>
        {mobileVersion ? (
          <Sidebar sideBar={sideBar} showSideBar={showSideBar} />
        ) : (
          <Navbar mobileVersion={mobileVersion} />
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
              element={<About mobileVersion={mobileVersion} />}
            />
            <Route
              path="/pages/services"
              element={<Services mobileVersion={mobileVersion} />}
            />
            <Route
              path="/pages/contacts"
              element={<Contacts mobileVersion={mobileVersion} />}
            />
          </Routes>
        </Pages>
      </Router>
    </Wrapper>
  );
}
