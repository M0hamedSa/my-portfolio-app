import React from "react";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";
import "../style/Techs.css";

function Techs() {
  return (
    <div className="container mx-auto" id="techs" data-aos="fade-down">
      <p className="text-4xl my-11 sec-title">My Tech Stack</p>
      <div className="flex flex-wrap justify-center mt-1 icon-div">
        <FaReact className="tech-icon text-[#00D8FF]" />
        <FaHtml5 className="tech-icon text-[#E44F26]" />
        <FaCss3Alt className="tech-icon text-[#1572B6]" />
        <FaJs className="tech-icon text-[#F5DE19]" />
        <FaAngular className="tech-icon text-[#DD0031]" />
        <RiTailwindCssFill className="tech-icon text-[#44A8B3]" />
        <FaBootstrap className="tech-icon text-[#563D7C]" />
        <FaGitSquare className="tech-icon text-[#DE4C36]" />
        <FaNodeJs className="tech-icon text-[#215732]" />
        <FaNpm className="tech-icon text-[#cc3534]" />
        <SiTypescript className="tech-icon text-[#007acc]" />
      </div>
    </div>
  );
}

export default Techs;
