import React from "react";

import "../styles/Components/AboutComp.css";
import SkillCard from "./card/SkillCardComp";
import SkillFrontCard from "./card/SkillFrontCardComp";
import SkillBackCard from "./card/SkillBackCardComp";
import SkillOtherCard from "./card/SkillOtherCardComp";

const AboutComp = () => {
  return (
    <div className="Container">
      <h1 className="titleAbout">About</h1>
      <p className="textAbout">
        Sou um programador de 18 anos de Santa Catarina, Brasil. Em 2021,
        iniciei minha jornada no mundo da programação e desde então venho me
        aprofundando cada vez mais nesse universo fascinante.
      </p>

      <h2 className="titleAbout">My Skills</h2>
      <SkillFrontCard/>
      <SkillBackCard/>
      <SkillCard/>
      <SkillOtherCard/>
    </div>
  );
};

export default AboutComp;
