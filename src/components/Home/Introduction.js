import React from "react";
import aidanTradeShow from "../../photos/aidanTradeShow.jpg"; // Adjust the path based on your folder structure

function Introduction() {
  return (
    <div className="bg-white flex flex-col items-center justify-center relative overflow-hidden p-4 h-screen"> {/* Set height to full viewport */}
      {/* Text Section */}
      <div className="flex flex-col items-center justify-center w-full my-5 lg:gap-5"> {/* Center items */}
        <h1 className="text-5xl lg:text-7xl font-extrabold text-customColor leading-tight mb-4 text-center"> {/* Center header text */}
          Let Me Introduce Myself
        </h1>

        <div className="w-full lg:w-3/4">
          <p className="text-black-300 text-base font-semibold lg:text-lg mb-4 text-left"> {/* Center paragraph text */}
            I’m Aidan Lozell, a recent graduate with a degree in Computer Science, majoring in Cyber Security. Throughout my studies, I built a strong foundation in areas like information security, threat analysis, and network protection. I’m passionate about safeguarding systems from cyber threats and have gained hands-on experience with security protocols, ethical hacking, and vulnerability assessments. Along the way, I sharpened my skills in programming, cryptography, and designing secure systems. I love staying up to date with the latest developments in cyber security and I’m excited to apply what I’ve learned to real-world challenges, helping to protect digital assets and networks in an ever-evolving landscape.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full flex items-center justify-center p-5">
        <img
          src={aidanTradeShow} // Use the imported image
          alt="Aidan Lozell"
          className="w-full h-auto max-w-lg lg:max-w-xl rounded-lg shadow-2xl"
          style={{ border: '4px solid #8AAAE5' }} // Use inline styles for the border color
        />
      </div>
    </div>
  );
}

export default Introduction;
