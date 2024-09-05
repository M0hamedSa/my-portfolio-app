import React from "react";
import "../style/Nav.css";

function Nav() {
  return (
    <div className="flex justify-center items-center nav-b gap-8 p-4">
      <p className="mr-24 logo">Dev-MOH</p>
      <a href="#projects" className="mx-4 text-lg nav-a">
        Projects
      </a>
      <a href="#techs" className="mx-4 text-lg nav-a">
        Techs
      </a>
      <a href="#contact" className="mx-4 text-lg nav-a">
        Contact
      </a>
    </div>
  );
}

export default Nav;
