import React from "react";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { FiUser, FiFileText, FiMail } from "react-icons/fi"; // Importing FiMail for the contact icon
import { Link } from "react-router-dom";

function MobileNav({ showNav, setShowNav }) {
  return (
    <div
      className={`fixed w-full top-[100px] left-0 z-50 transition-all duration-500 ${
        showNav
          ? "h-1/2 bg-black rounded-b-md border-2 border-t-0 border-black scale-y-100"
          : "h-0 bg-gradient-to-r from-blue-900 to-black rounded-b-md scale-y-0"
      }`}
    >
      <div className="flex flex-col items-center justify-center text-white">
        <ul className="flex gap-8 flex-col mt-10">
          <li className="relative group">
            <Link
              to="/"
              className="flex gap-1 items-center justify-center cursor-pointer text-base font-bold relative focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50 hover:text-teal-400 transition-colors"
              onClick={() => setShowNav(false)}
              aria-label="Home"
            >
              <AiOutlineHome fontSize={20} />
              <span>Home</span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to="/about"
              className="flex gap-1 items-center justify-center cursor-pointer text-base font-bold relative focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50 hover:text-teal-400 transition-colors"
              onClick={() => setShowNav(false)}
              aria-label="About"
            >
              <FiUser fontSize={20} />
              <span>About</span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to="/experience"
              className="flex gap-1 items-center justify-center cursor-pointer text-base font-bold relative focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50 hover:text-teal-400 transition-colors"
              onClick={() => setShowNav(false)}
              aria-label="Experience"
            >
              <FiUser fontSize={20} />
              <span>Experience</span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to="/projects"
              className="flex gap-1 items-center justify-center cursor-pointer text-base font-bold relative focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50 hover:text-teal-400 transition-colors"
              onClick={() => setShowNav(false)}
              aria-label="Projects"
            >
              <AiOutlineFundProjectionScreen fontSize={20} />
              <span>Projects</span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to="/resume"
              className="flex gap-1 items-center justify-center cursor-pointer text-base font-bold relative focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50 hover:text-teal-400 transition-colors"
              onClick={() => setShowNav(false)}
              aria-label="Resume"
            >
              <FiFileText fontSize={20} />
              <span>Resume</span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to="/contact"
              className="flex gap-1 items-center justify-center cursor-pointer text-base font-bold relative focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50 hover:text-teal-400 transition-colors"
              onClick={() => setShowNav(false)}
              aria-label="Contact"
            >
              <FiMail fontSize={20} /> {/* Changed icon to FiMail */}
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileNav;
