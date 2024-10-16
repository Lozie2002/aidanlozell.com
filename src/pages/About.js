import React from "react";
import WhoIM from "../components/About/WhoIM";
import Techstack from "../components/About/Techstack";
import Toolstack from "../components/About/Toolstack";

function About() {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-700 min-h-screen">
      <WhoIM />
      
      <Techstack />
      
      <Toolstack />
     
    </div>
  );
}

export default About;
