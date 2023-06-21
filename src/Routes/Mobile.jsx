import React from "react";
import { Link } from "react-scroll";

const Mobile = ({ ham, setHam }) => {
  return (
    <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-800">
      <li className="px-4 cursor-pointer capitalize py-6 text-gray-500 text-4xl nav-link home">
        <Link smooth duration={500} to="home">
          <a href="home" className="nav-link home" onClick={() => setHam(!ham)}>
            Home
          </a>
        </Link>
      </li>
      <li className="px-4 cursor-pointer capitalize py-6 text-gray-500 text-4xl nav-link about">
        <Link smooth duration={500} to="about">
          <a
            href="about"
            className="nav-link about"
            onClick={() => setHam(!ham)}
          >
            About
          </a>
        </Link>
      </li>
      <li className="px-4 cursor-pointer capitalize py-6 text-gray-500 text-4xl nav-link skills">
        <Link smooth duration={500} to="skills">
          <a
            href="skills"
            className="nav-link skills"
            onClick={() => setHam(!ham)}
          >
            Skills
          </a>
        </Link>
      </li>
      <li className="px-4 cursor-pointer capitalize py-6 text-gray-500 text-4xl nav-link projects">
        <Link smooth duration={500} to="projects">
          <a
            href="contact"
            className="nav-link projects"
            onClick={() => setHam(!ham)}
          >
            Projects
          </a>
        </Link>
      </li>
      <li className="px-4 cursor-pointer capitalize py-6 text-gray-500 text-4xl nav-link contact">
        <Link smooth duration={500} to="contact">
          <a
            href="contact"
            className="nav-link contact"
            onClick={() => setHam(!ham)}
          >
            Contact
          </a>
        </Link>
      </li>
      <li className="px-4 cursor-pointer capitalize py-6 text-gray-500 text-4xl nav-link resume">
        <a
          href="/Gaurav_Shukla_Resume.pdf"
          download={true}
          target="_blank"
          id="resume-button-1"
          onClick={() => {
            setHam(!ham);
            window.open(
              "https://drive.google.com/file/d/1fAK3o-4b6pdSq5LpVlcKxpxHsAr4iag7/view"
            );
          }}
        >
          resume
        </a>
      </li>
    </ul>
  );
};

export default Mobile;
