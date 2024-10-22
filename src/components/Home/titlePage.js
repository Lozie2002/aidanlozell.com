import React from "react";
import headShot from "../../photos/headshot.jpg";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaMapMarkerAlt } from 'react-icons/fa';
import backgroundImage from "../../photos/background.webp"; // Update this with the correct path

function TitlePage() {
  return (
    <div 
      className="h-[80vh] flex flex-col lg:flex-row items-center justify-center relative"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative w-full lg:w-1/2 h-full flex items-center justify-center flex-col mt-10 p-5 z-10">
        {/* Left side: Text */}
        <div className="flex gap-5 items-center lg:items-start justify-center flex-col text-center lg:text-left">
          <h3 className="text-white text-3xl lg:text-4xl">Hi There!</h3>
          <span className="flex text-white text-4xl lg:text-5xl font-bold">
            I'M Aidan Lozell
          </span>
          <p className="text-white text-base lg:text-lg font-thin">
            A Computer Science Graduate, <br /> Obsessed with all things Cybersecurity, and a passion for programming.
          </p>
          <div className="flex items-center text-white text-lg mt-0">
            <FaMapMarkerAlt className="mr-2" />
            <span>Sydney</span>
          </div>
          {/* Social Media Icons */}
          <div className="flex gap-4 mt-6 justify-center">
            <a href="https://github.com/Lozie2002" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white text-2xl hover:text-gray-300" />
            </a>
            <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white text-2xl hover:text-gray-300" />
            </a>
            <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white text-2xl hover:text-gray-300" />
            </a>
            <a href="https://www.facebook.com/your-facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-white text-2xl hover:text-gray-300" />
            </a>
          </div>
          {/* Location */}
       
        </div>
      </div>

      {/* Right side: Image */}
      <div className="relative w-full lg:w-1/2 h-full flex items-center justify-center flex-col mt-10 z-10">
        <img
          src={headShot} // Ensure the image path is correct
          alt="Aidan Lozell"
          className="w-1/2 lg:w-1/3 h-auto rounded-full"
        />
      </div>
    </div>
  );
}

export default TitlePage;
