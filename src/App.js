import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/pages/home" element={<Home />} />
          <Route path="/pages/about" element={<About />} />
          <Route path="/pages/services" element={<Services />} />
          <Route path="/pages/contacts" element={<Contacts />} />
        </Routes>
      </Router>
    </div>
  );
}
