import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

import AboutComp from "../components/AboutComp";
import ProjectsComp from "../components/ProjectsComp";
import ContactComp from "../components/ContactComp";

import "../styles/Screens/HomeScreen.css";

const HomeScreen = () => {
  return (
    <>
    <div className="Container">
      <div className="center">
          <div className="poligonal-container">
            <div className="poligonal-image"></div>
          </div>
      </div>
     
      <h2 className="title">Hi, My name is</h2>
      <h1 className="myName">Guilherme Halter Nunes</h1>
      <h3 className="function">Full Stack, Web Developer</h3>
      <div className="icons">
        <a
          href="https://www.linkedin.com/in/guilherme-halter-nunes/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/guilhermehalter/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com/GuilhermeHalter"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:halter.guilhermenunes@gmail.com?subject text"
          target="_blank"
          rel="noreferrer"
        >
          <IoIosMail />
        </a>
      </div>

      <div id="mouse-scroll">
        <div className="mouse">
          <div className="mouse-in"></div>
        </div>
        <div>
          <span className="down-arrow-1"></span>
          <span className="down-arrow-2"></span>
          <span className="down-arrow-3"></span>
        </div>
      </div>
    </div>
        <AboutComp/>

        <ProjectsComp/>
        
        <ContactComp/>
    </>
    
  );
};

export default HomeScreen;
