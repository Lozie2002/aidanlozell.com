import React from "react";
import aidan1 from "../../photos/aidan1.jpg";

function WhoIM() {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-black h-auto lg:h-[70vh] flex flex-wrap items-center justify-center flex-col lg:flex-row relative">
      {/* Left Section: Text Content */}
      <div className="w-full lg:w-1/2 h-auto lg:h-full flex items-center justify-center flex-col my-10 lg:gap-10 px-5 lg:px-0 z-20">
        <div className="flex items-center m-auto justify-center w-full lg:w-4/5">
          <div className="flex flex-col gap-4 text-gray-300 text-base font-thin lg:text-lg">
            <h1 className="text-3xl lg:text-5xl font-bold text-teal-400">
              More About Me
            </h1>
            <p className="mt-3 text-start">
              I’m Aidan Lozell, a recent graduate with a degree in Computer
              Science, majoring in Cyber Security. Throughout my studies, I built
              a strong foundation in areas like information security, threat
              analysis, and network protection. I’m passionate about safeguarding
              systems from cyber threats and have gained hands-on experience
              with security protocols, ethical hacking, and vulnerability
              assessments. Along the way, I sharpened my skills in programming,
              cryptography, and designing secure systems. I love staying up to
              date with the latest developments in cybersecurity and I’m excited
              to apply what I’ve learned to real-world challenges, helping to
              protect digital assets and networks in an ever-evolving landscape.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="w-full lg:w-1/2 h-auto lg:h-full flex items-center justify-center z-20">
        <img
          src={aidan1}
          alt="Aidan Lozell"
          className="object-cover lg:w-3/5 w-4/5 rounded-lg shadow-2xl border-teal-400 border-4"
        />
      </div>
    </div>
  );
}

export default WhoIM;
