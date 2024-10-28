import React from "react";
import { BsWindows } from "react-icons/bs";
import { SiVisualstudiocode, SiNetlify } from "react-icons/si";

function Toolstack() {
  const data = [
    {
      icon: <BsWindows fontSize={70} color="#0078D4" />, // Blue for Windows
      name: "Windows",
    },
    {
      icon: <SiVisualstudiocode fontSize={70} color="#007ACC" />, // Blue for VS Code
      name: "VS Code",
    },
    {
      icon: <SiNetlify fontSize={70} color="#00B141" />, // Green for Netlify
      name: "Netlify",
    },
  ];

  return (
    <div className="bg-white py-10 w-full flex flex-col items-center">
      <p className="text-black mb-6 text-center w-11/12 lg:w-4/5 text-lg lg:text-xl font-normal leading-relaxed">
        Here are the tools I use for development and deployment, demonstrating my workflow and capabilities.
      </p>
      <div className="flex items-center justify-center gap-5 flex-wrap w-full lg:w-4/5 mx-auto">
        {data.map((item, i) => (
          <div
            className="relative w-36 md:w-60 h-36 flex items-center justify-center m-3 bg-black z-20 rounded-lg hover:border-teal-400 hover:scale-[1.1] transition-all duration-300 group shadow-2xl"
            key={i}
          >
            <div className="transition-transform duration-300 ease-in-out group-hover:rotate-[15deg]">
              {item.icon}
            </div>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-2 text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              {item.name}
            </span>
            <div className="absolute inset-0 rounded-lg shadow-[0_0_15px_5px_rgba(0,123,255,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div> {/* Blue glow effect */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Toolstack;
