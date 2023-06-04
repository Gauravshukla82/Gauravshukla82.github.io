import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <div id="nav-menu">
          <div>
              
          </div>
      <div style={{display:"flex",justifyContent:"space-around",width:"50%"}}>
        <Link to={"/"} class="nav-link home">Home</Link>
        <Link to={"/about"} class="nav-link about">About</Link>
        <Link to={"/skills"} class="nav-link skills">Skills</Link>
        <Link to={"/projects"} class="nav-link projects">Projects</Link>
        <Link to={"/contact"} class="nav-link contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
