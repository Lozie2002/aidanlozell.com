import React from "react";
import headShot from "../../photos/headshot.jpg";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaMapMarkerAlt } from 'react-icons/fa';
import backgroundImage from "../../photos/background.webp";
import '../../index';  // Import this at the top of your component or main entry file

function TitlePage() {
  return (
    <div 
      className="min-h-[90vh] flex flex-col lg:flex-row items-center justify-center relative mb-10"
      style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      {/* Left Side: Text Content */}
      <div className="relative w-full lg:w-1/2 flex items-center justify-center flex-col p-6 lg:p-12 z-10 text-center lg:text-left">
        <h3 className="text-white text-4xl lg:text-5xl font-semibold">Hi There!</h3>
        <h1 className="text-white text-5xl lg:text-6xl font-extrabold my-2">I'M Aidan Lozell</h1>
        <p className="text-gray-300 text-lg lg:text-xl font-medium max-w-lg mt-4 leading-relaxed">
          Computer Science Graduate with a passion for Cybersecurity and an enthusiasm for programming. Always eager to learn and stay on top of the latest tech trends.
        </p>
        <div className="flex items-center text-gray-400 text-lg mt-4">
          <FaMapMarkerAlt className="mr-2" />
          <span>Sydney</span>
        </div>

        {/* Social Media Icons with Hover Animation */}
        <div className="flex gap-6 mt-8">
          <a href="https://github.com/Lozie2002" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="text-white text-3xl hover:text-gray-300 transition-transform transform hover:scale-110 duration-200" />
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="text-white text-3xl hover:text-gray-300 transition-transform transform hover:scale-110 duration-200" />
          </a>
          <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="text-white text-3xl hover:text-gray-300 transition-transform transform hover:scale-110 duration-200" />
          </a>
          <a href="https://www.facebook.com/your-facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className="text-white text-3xl hover:text-gray-300 transition-transform transform hover:scale-110 duration-200" />
          </a>
        </div>
      </div>

      {/* Right Side: Profile Image with Coin Turn Animation on Hover */}
      <div className="relative w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 z-10">
        <img
          src={headShot}
          alt="Aidan Lozell"
          className="w-1/2 lg:w-1/2 h-auto rounded-full shadow-lg hover:coin-turn"  // Apply the hover effect here
        />
      </div>
    </div>
  );
}

export default TitlePage;
