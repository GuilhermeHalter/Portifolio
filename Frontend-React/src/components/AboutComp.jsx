import React from "react";

import "../styles/Components/AboutComp.css";
import SkillCard from "./card/SkillCardComp";
import SkillFrontCard from "./card/SkillFrontCardComp";
import SkillBackCard from "./card/SkillBackCardComp";
import SkillOtherCard from "./card/SkillOtherCardComp";

const AboutComp = () => {
  return (
    <div className="Container" id="about">
      <h1 className="titleAbout">About</h1>
      <p className="textAbout">
        I am an 18-year-old programmer from Santa Catarina, Brazil. In 2021, I
        started my journey in the programming world and have been delving deeper
        into this fascinating universe ever since. Currently, I dedicate myself
        to web development, both front-end and back-end, and I am always looking
        for new challenges and opportunities to learn and grow.
      </p>

      <h2 className="titleAbout" id="skills">My Skills</h2>
      <SkillFrontCard />
      <SkillBackCard />
      <SkillCard />
      <SkillOtherCard />
    </div>
  );
};

export default AboutComp;
