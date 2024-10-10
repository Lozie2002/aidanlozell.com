import React from "react";
import headShot from "../photos/headshot.jpg"

function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 h-[80vh] flex flex-wrap items-center justify-center flex-col lg:flex-row">
      {/* Left side: Text */}
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center flex-col mt-10">
        <div className="flex gap-5 items-center lg:items-start justify-center flex-col">
          <h3 className="flex text-white text-4xl gap-2">Hi There!</h3>
          <span className="flex text-white text-4xl lg:text-5xl gap-2 font-bold">
            I'M <p className="text-[black]">Aidan Lozell</p>
          </span>
        </div>
      </div>

      {/* Right side: Image */}
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center flex-col mt-10">
        <img
          src= {headShot}  // Replace with the correct image path
          alt="Aidan Lozell"
          className="w-1/3 lg:w-1/3 h-auto rounded-full"
        />
      </div>
    </div>
  );
}

export default Hero;
