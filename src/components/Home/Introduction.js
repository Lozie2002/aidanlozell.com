import React from "react";
import aidanTradeShow from "../../photos/aidanTradeShow.jpg"; // Adjust the path based on your folder structure

function Introduction() {
  return (
<div className="flex flex-col items-center justify-center relative overflow-hidden p-4 min-h-screen"
style={{backgroundColor: "White"}}>
{/* Responsive layout wrapper for text and image */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-5 px-4 lg:px-10">
        
        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center my-5 lg:my-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-customColor leading-tight mb-4 text-center lg:text-left">
            Let Me Introduce Myself
          </h1>
          <p className="text-black-300 text-sm md:text-base lg:text-lg font-semibold mb-4 text-center lg:text-left lg:pr-8">
            I’m Aidan Lozell, a recent graduate with a degree in Computer Science, majoring in Cyber Security. Throughout my studies, I built a strong foundation in areas like information security, threat analysis, and network protection. I’m passionate about safeguarding systems from cyber threats and have gained hands-on experience with security protocols, ethical hacking, and vulnerability assessments. Along the way, I sharpened my skills in programming, cryptography, and designing secure systems. I love staying up to date with the latest developments in cyber security and I’m excited to apply what I’ve learned to real-world challenges, helping to protect digital assets and networks in an ever-evolving landscape.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-5 lg:p-0">
          <img
            src={aidanTradeShow}
            alt="Aidan Lozell"
            className="w-2/3 sm:w-1/2 md:w-1/3 lg:w-2/5 xl:w-1/3 rounded-lg shadow-2xl"
            style={{ border: '4px solid #8AAAE5' }}
          />
        </div>
      </div>
    </div>
  );
}

export default Introduction;
