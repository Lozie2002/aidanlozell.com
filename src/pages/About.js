import React from "react";
import WhoIM from "../components/WhoIM";
import Techstack from "../components/Techstack";
import Toolstack from "../components/Toolstack";

function About() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 min-h-screen">
      <WhoIM />
      <h1 className="m-auto flex items-center w-full justify-center gap-2 text-gray-200 font-medium text-4xl my-3">
        Professional Skillset 
      </h1>
      <Techstack />
      <h1 className="m-auto flex items-center w-full justify-center gap-2 text-gray-200 font-medium text-4xl my-3">
        Tools I Use
      </h1>
      <Toolstack />
     
    </div>
  );
}

export default About;
