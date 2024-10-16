import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { FiUser, FiFileText } from "react-icons/fi";
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
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={
        scroll
          ? "flex items-center justify-between px-4 z-50 bg-black bg-opacity-80 backdrop-blur-lg rounded drop-shadow-lg shadow-lg relative lg:sticky top-0"
          : "flex items-center justify-between px-4 z-50 bg-black bg-opacity-80 relative lg:sticky top-0"
      }
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
              to={"/"}
              className="flex gap-1 items-center justify-center cursor-pointer text-base lg:text-lg font-semibold relative before:absolute before:rounded-md before:left-0 before:-bottom-1 before:w-0 transition-all before:duration-200 before:h-[4px] before:bg-purple-500 group-hover:before:w-full"
            >
              <AiOutlineHome fontSize={20} />
              <span className="">Home</span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to={"/about"}
              className="flex gap-1 items-center justify-center cursor-pointer text-base lg:text-lg font-semibold relative before:absolute before:rounded-md before:left-0 before:-bottom-1 before:w-0 transition-all before:duration-200 before:h-[4px] before:bg-purple-500 group-hover:before:w-full"
            >
              <FiUser fontSize={20} />
              <span className="">About</span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to={"/Experience"}
              className="flex gap-1 items-center justify-center cursor-pointer text-base lg:text-lg font-semibold relative before:absolute before:rounded-md before:left-0 before:-bottom-1 before:w-0 transition-all before:duration-200 before:h-[4px] before:bg-purple-500 group-hover:before:w-full"
            >
              <FiUser fontSize={20} />
              <span className="">Experience</span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to={"/projects"}
              className="flex gap-1 items-center justify-center cursor-pointer text-base lg:text-lg font-semibold relative before:absolute before:rounded-md before:left-0 before:-bottom-1 before:w-0 transition-all before:duration-200 before:h-[4px] before:bg-purple-500 group-hover:before:w-full"
            >
              <AiOutlineFundProjectionScreen fontSize={20} />
              <span className="">Projects</span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to={"/resume"}
              className="flex gap-1 items-center justify-center cursor-pointer text-base lg:text-lg font-semibold relative before:absolute before:rounded-md before:left-0 before:-bottom-1 before:w-0 transition-all before:duration-200 before:h-[4px] before:bg-purple-500 group-hover:before:w-full"
            >
              <FiFileText fontSize={20} />
              <span className="">Resume</span>
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
