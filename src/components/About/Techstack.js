import React from "react";
import { FaCss3Alt, FaReact, FaNodeJs, FaAws, FaAndroid } from "react-icons/fa";
import { SiCplusplus, SiPython, SiFlutter, SiLinux, SiR } from "react-icons/si"; // Import additional icons

const data = [
  { icon: <FaCss3Alt fontSize={70} color="#2965f1" />, name: "CSS3" },      // Blue color for CSS3
  { icon: <FaReact fontSize={70} color="#61DBFB" />, name: "React" },      // Light blue color for React
  { icon: <FaNodeJs fontSize={70} color="#68A063" />, name: "Node.js" },   // Green color for Node.js
  { icon: <FaAws fontSize={70} color="#FF9900" />, name: "AWS" },          // Orange color for AWS
  { icon: <FaAndroid fontSize={70} color="#A4C639" />, name: "Android" },  // Green color for Android
  { icon: <SiCplusplus fontSize={70} color="#00599C" />, name: "C++" },    // Blue color for C++
  { icon: <SiPython fontSize={70} color="#3776AB" />, name: "Python" },    // Blue color for Python
  { icon: <SiLinux fontSize={70} color="#FCC624" />, name: "Linux" },      // Yellow color for Linux
  { icon: <SiFlutter fontSize={70} color="#02569B" />, name: "Flutter" },  // Blue color for Flutter
  { icon: <SiR fontSize={70} color="#276DC3" />, name: "R" },              // Blue color for R
];

function Techstack() {
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  let shuffledData = shuffleArray(data);

  return (
    <div className="bg-customColor py-10 w-full flex flex-col items-center">
      <h1 className="m-auto flex items-center w-full justify-center gap-2 text-white font-bold text-5xl my-3">
        Professional Skillset
      </h1>
      <p className="text-black mb-6 text-center w-11/12 lg:w-4/5 text-lg lg:text-xl font-normal leading-relaxed">
        Here are the technologies and tools I work with, showcasing my skills and experience.
      </p>
      <div className="flex items-center justify-center gap-5 flex-wrap w-full lg:w-4/5 mx-auto">
        {shuffledData.map((item, i) => (
          <div
            className="relative w-36 md:w-60 h-36 flex items-center justify-center m-3 bg-black z-20 rounded-lg hover:border-customColor hover:scale-[1.1] transition-transform duration-300 ease-in-out group shadow-2xl"
            key={i}
          >
            <div className="transition-transform duration-300 ease-in-out group-hover:rotate-[15deg]">
              {item.icon}
            </div>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-2 text-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              {item.name}
            </span>
            <div className="absolute inset-0 rounded-lg shadow-[0_0_15px_5px_rgba(0,123,255,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div> {/* Blue glow effect */}
            <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              {item.name}
            </span> {/* Hover text */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Techstack;
