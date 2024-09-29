import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./App.css";
import FooterSection from "./Contents/Footer";
import ProjectsSection from "./Contents/Projects";
import HeaderSection from "./Contents/Header";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Container for both boxes */}
      <div className="flex flex-col md:flex-row flex-grow">
        {/* First Box: Role Descriptions and Skills */}
        <HeaderSection />
        <ProjectsSection />
      </div>

      <FooterSection />
    </div>
  );
}

export default App;
