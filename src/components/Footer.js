import React from "react";
import "../style/Footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function footer() {
  return (
    <div className="bg-footer" id="contact">
      <div className="container mx-auto flex justify-between contact-bg items-center">
        <p className="mr-24 logo-footer">Dev-MOH</p>
        <div className="flex gap-8 items-center">
          <p className="flex items-center gap-3">+201208858623</p>
          <a
            href="https://mail.google.com/"
            target="_blank"
            className="flex items-center gap-3"
            rel="noreferrer"
          >
            <p>mohamedsa68599@gmail.com</p>
          </a>
          <div className="flex gap-4 footer-icons">
            <a
              href="https://www.facebook.com/mo7mad.saleh/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FaFacebookSquare className="footer-icon" />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-sal/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FaLinkedin className="footer-icon" />
            </a>
            <a
              href="https://github.com/M0hamedSa"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FaGithub className="footer-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer;
