import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav.js";
import About from "./about/About.js"; // Corrected import path
import Skills from "./skills/Skills.js"; // Corrected import path
import Projects from "./projects/Projects.js"; // Corrected import path
import Contact from "./contact/Contact.js"; // Corrected import path
import "./styles/app.css";
import Background from "./background/Background.js";
import PlayerStats from "./playerStats/PlayerStats.js";
import PlayerLocation from "./playerLocation/PlayerLocation.js";

const App = () => {
  return (
    <Router>
      <Nav />
      <Background />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <PlayerStats />
      <PlayerLocation/>
    </Router>
  );
};

export default App;
