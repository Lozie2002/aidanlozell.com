import React from "react";
import aidanTradeShow from "../../photos/aidanTradeShow.jpg";

function Introduction() {
  return (
    <div className="bg-white min-h-[70vh] flex flex-wrap items-center justify-center flex-col lg:flex-row relative mb-10 px-6 lg:px-10 xl:py-7 2xl:py-3">
      {/* Responsive layout wrapper for text and image */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-8 lg:gap-10 2xl:gap-6">
        
        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center my-5 lg:my-0 px-4 lg:px-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-customColor leading-snug mb-6">
            Let Me Introduce Myself
          </h1>
          <p className="text-gray-800 text-base sm:text-lg lg:text-xl font-light leading-relaxed text-left lg:pr-6">
  I’m Aidan Lozell, a recent graduate with a degree in Computer Science, specializing in Cyber Security. <br /> 
  My studies provided me with a solid foundation in critical areas, such as:
</p>
<ul className="list-disc list-inside text-gray-800 text-base sm:text-lg lg:text-xl font-light mt-4 ml-5">
  <li>Network Security</li>
  <li>Threat Analysis</li>
  <li>Network Protection</li>
  <li>Penetration Testing</li>
  <li>Data Management</li>
</ul>
<p className="text-gray-800 text-base sm:text-lg lg:text-xl font-light leading-relaxed text-left lg:pr-6 mt-4">
  Driven by a passion for protecting systems from cyber threats, I’ve developed hands-on expertise in security protocols, ethical hacking, and vulnerability assessments. 
  Through this journey, I’ve honed my skills in programming, cryptography, and secure system design. 
  Staying up-to-date with the latest advancements in cybersecurity, I’m eager to bring my knowledge and experience to real-world challenges, 
  contributing to the defense of digital assets and infrastructure in our ever-evolving tech landscape.
</p>

        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-0">
          <img
            src={aidanTradeShow}
            alt="Aidan Lozell"
            className="w-2/3 sm:w-1/2 lg:w-3/5 xl:w-1/2 rounded-lg shadow-2xl border-4 border-[#8AAAE5]"
          />
        </div>
      </div>
    </div>
  );
}

export default Introduction;
