// Setroutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/about"; // ✅ Make sure 'about.jsx' exists
import Skills from "./Components/skills"; // ✅ Make sure 'skills.jsx' exists
import Education from "./Components/education"
import Contact from "./Components/Contact"
import Project from "./Components/project"

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/education" element={<Education />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Project" element={<Project />} />
    </Routes>
  );
}
