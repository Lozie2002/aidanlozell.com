import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { FiUser, FiFileText, FiMail } from "react-icons/fi"; // Importing FiMail for the contact icon
import { RiMenu3Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import MobileNav from "./MobileNav";
import logo from "../../photos/logo.png"; // Importing the logo image

function Header() {
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);
  const [scroll, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup event listener
  }, []);

  return (
    <div
      className={`flex items-center justify-between px-4 z-50 ${
        scroll ? "bg-black bg-opacity-80 backdrop-blur-lg rounded drop-shadow-lg shadow-lg" : "bg-black"
      } lg:sticky top-0 transition-all duration-300`}
    >
      {/* Replacing name with logo */}
      <span className="md:w-1/3 lg:w-1/2 flex items-center justify-center py-5 px-2 relative">
        <img
          src={logo}
          alt="Logo"
          className="cursor-pointer w-30 h-16"
          onClick={() => navigate("/")} // Navigate to the homepage on click
        />
      </span>

      {/* Desktop navigation links */}
      <div className="w-2/3 hidden lg:flex items-center justify-start text-white">
        <ul className="flex gap-8 lg:gap-12">
          <li className="relative group">
            <Link
              to="/"
              className="flex gap-1 items-center justify-center cursor-pointer text-base lg:text-lg font-semibold relative before:absolute before:rounded-md before:left-0 before:-bottom-1 before:w-0 transition-all before:duration-200 before:h-[4px] before:bg-customColor group-hover:before:w-full"
            >
              <AiOutlineHome fontSize={20} />
              <span>Home</span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to="/about"
              className="flex gap-1 items-center justify-center cursor-pointer text-base lg:text-lg font-semibold relative before:absolute before:rounded-md before:left-0 before:-bottom-1 before:w-0 transition-all before:duration-200 before:h-[4px] before:bg-customColor group-hover:before:w-full"
            >
              <FiUser fontSize={20} />
              <span>About</span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to="/experience"
              className="flex gap-1 items-center justify-center cursor-pointer text-base lg:text-lg font-semibold relative before:absolute before:rounded-md before:left-0 before:-bottom-1 before:w-0 transition-all before:duration-200 before:h-[4px] before:bg-customColor group-hover:before:w-full"
            >
              <FiUser fontSize={20} />
              <span>Experience</span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to="/certification"
              className="flex gap-1 items-center justify-center cursor-pointer text-base lg:text-lg font-semibold relative before:absolute before:rounded-md before:left-0 before:-bottom-1 before:w-0 transition-all before:duration-200 before:h-[4px] before:bg-customColor group-hover:before:w-full"
            >
              <FiUser fontSize={20} />
              <span>Certifications</span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to="/projects"
              className="flex gap-1 items-center justify-center cursor-pointer text-base lg:text-lg font-semibold relative before:absolute before:rounded-md before:left-0 before:-bottom-1 before:w-0 transition-all before:duration-200 before:h-[4px] before:bg-customColor group-hover:before:w-full"
            >
              <AiOutlineFundProjectionScreen fontSize={20} />
              <span>Projects</span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to="/resume"
              className="flex gap-1 items-center justify-center cursor-pointer text-base lg:text-lg font-semibold relative before:absolute before:rounded-md before:left-0 before:-bottom-1 before:w-0 transition-all before:duration-200 before:h-[4px] before:bg-customColor group-hover:before:w-full"
            >
              <FiFileText fontSize={20} />
              <span>Resume</span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to="/contact"
              className="flex gap-1 items-center justify-center cursor-pointer text-base lg:text-lg font-semibold relative before:absolute before:rounded-md before:left-0 before:-bottom-1 before:w-0 transition-all before:duration-200 before:h-[4px] before:bg-customColor group-hover:before:w-full"
            >
              <FiMail fontSize={20} /> {/* Changed icon to FiMail */}
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile navigation toggle */}
      <span>
        <div className="h-full lg:hidden flex items-center justify-center cursor-pointer relative">
          {showNav ? (
            <MdClose
              fontSize={25}
              className="text-white"
              onClick={() => setShowNav(!showNav)}
            />
          ) : (
            <RiMenu3Fill
              fontSize={25}
              className="text-white"
              onClick={() => setShowNav(!showNav)}
            />
          )}
          <MobileNav showNav={showNav} setShowNav={setShowNav} />
        </div>
      </span>
    </div>
  );
}

export default Header;
