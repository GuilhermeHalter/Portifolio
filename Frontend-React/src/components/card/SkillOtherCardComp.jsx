import React, { useState } from 'react';
import '../../styles/Components/card/SkillCardComp.css';

import  { FaGitAlt, FaGithub, FaNpm, FaMarkdown, FaNode } from "react-icons/fa";
import { SiVisualstudiocode, SiArduino } from "react-icons/si";

import { FaCircleArrowDown, FaCircleArrowUp } from "react-icons/fa6";



const SkillOtherCard = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCard = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`skill-card ${isOpen ? 'open' : ''}`}>
            <div className="card-header" onClick={toggleCard}>
                <h3>Other</h3>
                <span className="arrow">{isOpen ? <FaCircleArrowUp style={{ fontSize: "20px", marginTop:"10px" }}/> : <FaCircleArrowDown style={{ fontSize: "20px", marginTop:"10px" }}/>}</span>
            </div>
            <div className={`card-body ${isOpen ? 'open' : ''}`}>
                {isOpen && (
                    <div>
                        <FaGitAlt title='Git' style={{ color: '#F05032' }} />
                        <FaGithub title='Github' style={{ color: '#181717' }} />
                        <FaNpm title='NPM' style={{ color: '#CB3837' }} />
                        <FaMarkdown title='Markdown' style={{ color: '#000000', marginTop: "20px" }} />
                        <FaNode title='Node' style={{ color: '#68A063', marginTop: "20px" }} />
                        <SiVisualstudiocode title='VsCode' style={{ color: '#007ACC', marginTop: "20px" }} />
                        <SiArduino title='Arduido IDEA' style={{ color: '#00979D', marginTop: "20px" }} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default SkillOtherCard;
