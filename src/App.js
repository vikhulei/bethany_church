import "./styles.css";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: absolute;
  padding-top: 40px;
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: lightgray;
  z-index: -99;
`;

export default function App() {
  return (
    <Wrapper className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/pages/home" element={<Home />} />
          <Route path="/pages/about" element={<About />} />
          <Route path="/pages/services" element={<Services />} />
          <Route path="/pages/contacts" element={<Contacts />} />
        </Routes>
      </Router>
    </Wrapper>
  );
}
