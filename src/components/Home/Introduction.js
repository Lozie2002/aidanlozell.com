import React from "react";
import aidan2 from "../../photos/aidan2.jpg"; // Adjust the path based on your folder structure

function Introduction() {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black flex flex-wrap items-center justify-center flex-col lg:flex-row relative overflow-hidden">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center flex-col my-10 lg:gap-10">
        <h1 className="text-teal-400 text-2xl lg:text-4xl my-10">
          LET ME INTRODUCE MYSELF
        </h1>
        <div className="flex items-center justify-center w-11/12 lg:w-3/4 lg:mr-10">
          <span className="flex flex-col gap-3 text-gray-300 text-base font-semibold lg:text-lg">
            <p>
              I’m Aidan Lozell, a recent graduate with a degree in Computer Science, majoring in Cyber Security. 
              Throughout my studies, I built a strong foundation in areas like information security, threat analysis, and network protection. 
              I’m passionate about safeguarding systems from cyber threats and have gained hands-on experience with security protocols, ethical hacking, 
              and vulnerability assessments. Along the way, I sharpened my skills in programming, cryptography, and designing secure systems. 
              I love staying up to date with the latest developments in cyber security and I’m excited to apply what I’ve learned to real-world challenges, 
              helping to protect digital assets and networks in an ever-evolving landscape.
            </p>
          </span>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center p-10">
        <img
          src={aidan2} // Use the imported image
          alt="Aidan Lozell"
          className="w-full h-auto max-w-sm lg:max-w-md rounded-lg shadow-2xl border-4 border-teal-400"
        />
      </div>
    </div>
  );
}

export default Introduction;
