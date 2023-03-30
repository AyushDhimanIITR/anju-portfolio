import React from "react";
import './App.css';
import LandingPage from "./Components/Home/LandingPage";
import Contact from "./Components/Contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./Components/Project/Project";
import About from "./Components/About/About";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
