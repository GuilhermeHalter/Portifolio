import React from "react";
import "../styles/Components/FooterComp.css";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const FooterComp = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="links">
        <ul className="example-2">
          <li className="icon-content">
            <a href="https://www.instagram.com/guilhermehalter/" aria-label="Instagram" data-social="instagram">
              <FaInstagram size={24} />
              <div className="filled"></div>
            </a>
            <div className="tooltip">Instagram</div>
          </li>
          <li className="icon-content">
            <a href="https://github.com/GuilhermeHalter" aria-label="GitHub" data-social="github">
              <FaGithub size={24} />
              <div className="filled"></div>
            </a>
            <div className="tooltip">GitHub</div>
          </li>
          <li className="icon-content">
            <a href="https://www.linkedin.com/in/guilherme-halter-nunes/" aria-label="LinkedIn" data-social="linkedin">
              <FaLinkedin size={24} />
              <div className="filled"></div>
            </a>
            <div className="tooltip">LinkedIn</div>
          </li>
        </ul>

        </div>
        
        <div className="mail">
            <p>halter.guilhermenunes@gmail.com</p>
        </div>

        <hr />

        <p className="direitos">© all rights reserved</p>
      </div>
    </footer>
  );
};

export default FooterComp;
