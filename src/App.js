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

const Wrapper = styled.div`
  position: absolute;
  padding-top: 40px;
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: lightgray;
  z-index: -99;
`;

export default function App() {
  const [mobileVersion, setMobileVersion] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700) {
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
      <Router>
        {mobileVersion ? <Sidebar /> : <Navbar mobileVersion={mobileVersion} />}
        <Routes>
          <Route
            exact
            path="/"
            element={<Home mobileVersion={mobileVersion} />}
          />
          <Route
            path="/pages/home"
            element={<Home mobileVersion={mobileVersion} />}
          />
          <Route path="/pages/about" element={<About />} />
          <Route path="/pages/services" element={<Services />} />
          <Route path="/pages/contacts" element={<Contacts />} />
        </Routes>
      </Router>
    </Wrapper>
  );
}
