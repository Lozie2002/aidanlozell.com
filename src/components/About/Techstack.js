import React from "react";
import {
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaAws,
  FaAndroid,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiPython,
  SiFlutter,
  SiLinux,
  SiR,
  SiVisualstudiocode,
  SiNetlify,
} from "react-icons/si";
import { BsWindows } from "react-icons/bs";

const techData = [
  { icon: <FaCss3Alt fontSize={70} color="#2965f1" />, name: "CSS3" },
  { icon: <FaReact fontSize={70} color="#61DBFB" />, name: "React" },
  { icon: <FaNodeJs fontSize={70} color="#68A063" />, name: "Node.js" },
  { icon: <FaAws fontSize={70} color="#FF9900" />, name: "AWS" },
  { icon: <FaAndroid fontSize={70} color="#A4C639" />, name: "Android" },
  { icon: <SiCplusplus fontSize={70} color="#00599C" />, name: "C++" },
  { icon: <SiPython fontSize={70} color="#3776AB" />, name: "Python" },
  { icon: <SiLinux fontSize={70} color="#FCC624" />, name: "Linux" },
  { icon: <SiFlutter fontSize={70} color="#02569B" />, name: "Flutter" },
  { icon: <SiR fontSize={70} color="#276DC3" />, name: "R" },
];

const toolData = [
  { icon: <BsWindows fontSize={70} color="#0078D4" />, name: "Windows" },
  { icon: <SiVisualstudiocode fontSize={70} color="#007ACC" />, name: "VS Code" },
  { icon: <SiNetlify fontSize={70} color="#00B141" />, name: "Netlify" },
];

function TechAndToolstack() {
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const shuffledTechData = shuffleArray([...techData]);
  const shuffledToolData = shuffleArray([...toolData]);

  return (
    <div className="bg-gradient-to-r from-customColor to-blue-200 py-10 w-screen flex flex-col items-center">
      {/* Professional Skillset Section */}
      <h1 className="flex items-center w-full justify-center gap-2 text-white font-bold text-5xl my-3">
        Professional Skillset
      </h1>
      <h2 className="flex items-center w-full justify-center gap-2 text-white font-bold text-3xl my-3">
        Languages and Tools
      </h2>
      <p className="text-white mb-6 text-center w-11/12 lg:w-4/5 text-lg lg:text-xl font-normal leading-relaxed">
        Here are the technologies and tools I work with, showcasing my skills and experience.
      </p>
      <div className="flex items-center justify-center gap-5 flex-wrap w-full lg:w-4/5 mx-auto">
        {shuffledTechData.map((item, i) => (
          <div
            className="relative w-36 md:w-60 h-36 flex items-center justify-center m-3 bg-black z-20 rounded-lg hover:border-customColor hover:scale-110 transition-transform duration-300 ease-in-out group shadow-2xl"
            key={i}
          >
            <div className="transition-transform duration-300 ease-in-out group-hover:rotate-15">
              {item.icon}
            </div>
            <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              {item.name}
            </span>
            <div className="absolute inset-0 rounded-lg shadow-[0_0_15px_5px_rgba(0,123,255,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
          </div>
        ))}
      </div>

      {/* Toolstack Section */}
      <h2 className="flex items-center w-full justify-center gap-2 text-white font-bold text-3xl my-3 mt-12">
        Development and Deployment Tools
      </h2>
      <p className="text-white mb-6 text-center w-11/12 lg:w-4/5 text-lg lg:text-xl font-normal leading-relaxed">
        Here are the tools I use for development and deployment, demonstrating my workflow and capabilities.
      </p>
      <div className="flex items-center justify-center gap-5 flex-wrap w-full lg:w-4/5 mx-auto">
        {shuffledToolData.map((item, i) => (
          <div
            className="relative w-36 md:w-60 h-36 flex items-center justify-center m-3 bg-black rounded-lg hover:border-teal-400 hover:scale-110 transition-all duration-300 group shadow-2xl"
            key={i}
          >
            <div className="transition-transform duration-300 ease-in-out group-hover:rotate-15">
              {item.icon}
            </div>
            <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              {item.name}
            </span>
            <div className="absolute inset-0 rounded-lg shadow-[0_0_15px_5px_rgba(0,123,255,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechAndToolstack;
