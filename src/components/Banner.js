import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "../style/Banner.css";
import Particle from "./Particle";

function Banner() {
  return (
    <div className=" pt-32 pb-32 relative">
      <div className="container mx-auto" id="home">
        <Particle />
        <h1
          className="text-6xl font-extrabold mb-11 t-opt"
          data-aos="fade-down"
        >
          I'M A <span className="title-color">FRONT-END DEVELOPER</span> FROM
          GIZA, EG
        </h1>
        <p className="my-11 about-opt text-lg" data-aos="fade-down">
          Hello! I’m Mohamed Saleh, I am an enthusiastic front-end developer
          with a proficient skill set in developing responsive websites and web
          applications, utilizing a diverse range of front-end technologies.
        </p>
        <div className="flex gap-10 my-32 " data-aos="fade-down">
          <a
            href="https://www.facebook.com/mo7mad.saleh/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <FaFacebookSquare className="fb icon-opt" />{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-sal/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <FaLinkedin className="link icon-opt" />
          </a>
          <a
            href="https://github.com/M0hamedSa"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <FaGithub className="git icon-opt" />
          </a>
        </div>
        <div className="cv-btn flex gap-3 flex-wrap">
          <a
            href="https://drive.google.com/file/d/1evV-5RWgN2EB-SRGfcHEir-eD0JQVWCj/view?usp=drive_link"
            target="_blank"
          >
            <button data-aos="fade-down">My CV</button>
          </a>

          <a href="#projects">
            <button className="btn2" data-aos="fade-down">
              Projects
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
