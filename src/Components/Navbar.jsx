import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import Mobile from "../Routes/Mobile";
function Navbar() {
  const [ham, setHam] = useState(false);
  return (
    <nav
      id="nav-menu"
      className="flex justify-between items-center w-full h-20px-4 text-white bg-black fixed"
    >
      <div>
        <h1 className="text-5xl font-signature ml-2 mt-5" id="user-detail-name">Gaurav Shukla</h1>
      </div>
      <ul className="hidden md:flex ">
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
          <Link smooth duration={500} to="home">
            <a href="home" className="nav-link home">
              Home
            </a>
          </Link>
        </li>
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
          <Link smooth duration={500} to="about">
            <a href="about" className="nav-link about">
              About
            </a>
          </Link>
        </li>
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
          <Link smooth duration={500} to="skills">
            <a href="skills" className="nav-link skills">
              Skills
            </a>
          </Link>
        </li>
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
          <Link smooth duration={500} to="projects">
            <a href="projects" className="nav-link projects">
              Projects
            </a>
          </Link>
        </li>
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
          <Link smooth duration={500} to="contact">
            <a href="contact" className="nav-link contact">
              Contact
            </a>
          </Link>
        </li>
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
          <a
            href="/Gaurav_Shukla_Resume.pdf"
            target="_blank"
            download={true}
            rel="noopener noreferrer"
            className="nav-link resume"
            id="resume-button-1"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1fAK3o-4b6pdSq5LpVlcKxpxHsAr4iag7/view"
              )
            }
          >
            Resume
          </a>
        </li>
      </ul>
      <div
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        onClick={() => setHam(!ham)}
      >
        {ham ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {ham && <Mobile ham={ham} setHam={ setHam} />}
    </nav>
  );
}

export default Navbar;
