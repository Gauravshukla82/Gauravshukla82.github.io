import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
function Navbar() {
  const [ham, setHam] = useState(false);
  return (
    <nav
      id="nav-menu"
      className="flex justify-between items-center w-full h-20px-4 text-white bg-black fixed"
    >
      <div>
        <h1 className="text-5xl font-signature ml-2 mt-5">Gaurav Shukla</h1>
      </div>
      <ul className="hidden md:flex ">
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
          <a href="#home" className="nav-link home">
            Home
          </a>
        </li>
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
          <a href="#about" className="nav-link about">
            About
          </a>
        </li>
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
          <a href="#skills" className="nav-link skills">
            Skills
          </a>
        </li>
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
          <a href="#projects" className="nav-link projects">
            Projects
          </a>
        </li>
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
          <a href="#contact" className="nav-link contact">
            Contact
          </a>
        </li>
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
          <a
            href="https://drive.google.com/file/d/1fAK3o-4b6pdSq5LpVlcKxpxHsAr4iag7/view?usp=sharing"
            target="_blank"
            className="nav-link resume"
            id="resume-link-1"
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
      {ham && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-800">
          <li className="px-4 cursor-pointer capitalize py-6 text-gray-500 text-4xl nav-link home">
            home
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-gray-500 text-4xl nav-link about">
            about
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-gray-500 text-4xl nav-link skills">
            skills
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-gray-500 text-4xl nav-link contact">
            projects
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-gray-500 text-4xl nav-link contact">
            contact
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-gray-500 text-4xl nav-link resume">
            <a href="https://drive.google.com/file/d/1fAK3o-4b6pdSq5LpVlcKxpxHsAr4iag7/view?usp=sharing">
              resume
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
