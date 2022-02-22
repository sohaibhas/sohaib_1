import React from "react";
import { BrowserRouter, Route, Router, Routes, Redirect  } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import LandingPage from "./components/LandingPage";
import Header from "./components/LandingPages/Header";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Servic/Services";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
