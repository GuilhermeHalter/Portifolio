import React, { useState } from 'react';
import '../../styles/Components/card/SkillCardComp.css';

import { IoLogoJavascript } from "react-icons/io5";
import { FaPython,FaJava } from "react-icons/fa";
import { SiCplusplus, SiPhp, SiCsharp } from "react-icons/si";
import { FaCircleArrowDown, FaCircleArrowUp } from "react-icons/fa6";




const SkillCard = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCard = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`skill-card ${isOpen ? 'open' : ''}`}>
            <div className="card-header" onClick={toggleCard}>
                <h3>Programming Languages</h3>
                <span className="arrow">{isOpen ? <FaCircleArrowUp style={{ fontSize: "20px", marginTop:"10px" }}/> : <FaCircleArrowDown style={{ fontSize: "20px", marginTop:"10px" }}/>}</span>
            </div>
            <div className={`card-body ${isOpen ? 'open' : ''}`}>
                {isOpen && (
                    <div>
                        <IoLogoJavascript title='JavaScript' style={{ color: '#F7DF1E' }} />
                        <FaPython title='Python' style={{ color: '#3776AB' }} />
                        <FaJava title='Java' style={{ color: '#007396' }} />
                        <SiCplusplus title='C plus plus' style={{ color: '#00599C', marginTop: "20px" }} />
                        <SiCsharp title='C sharp' style={{ color: '#239120', marginTop: "20px" }} />
                        <SiPhp title='PHP' style={{ color: '#777BB4', marginTop: "20px" }} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default SkillCard;
