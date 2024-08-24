import React, { useState } from 'react';
import '../../styles/Components/card/SkillCardComp.css';

import { FaHtml5, FaCss3, FaVuejs, FaReact, FaBootstrap } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { SiVite } from "react-icons/si";
import { FaCircleArrowDown, FaCircleArrowUp } from "react-icons/fa6";



const SkillFrontCard = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCard = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`skill-card ${isOpen ? 'open' : ''}`}>
            <div className="card-header" onClick={toggleCard}>
                <h3>Front-end</h3>
                <span className="arrow">{isOpen ? <FaCircleArrowUp style={{ fontSize: "20px", marginTop:"10px" }}/> : <FaCircleArrowDown style={{ fontSize: "20px", marginTop:"10px" }}/>}</span>
            </div>
            <div className={`card-body ${isOpen ? 'open' : ''}`}>
                {isOpen && (
                    <div>
                        <FaHtml5 title='HTML5' style={{ color: '#E44D26'}} />
                        <FaCss3 title='CSS' style={{ color: '#1572B6' }} />
                        <FaBootstrap title='Bootstrap' style={{ color: '#563D7C' }} />
                        <FaVuejs title='Vue.js' style={{ color: '#1DB77A', marginTop: "20px"  }} />
                        <FaReact title='React' style={{ color: '#61DAFB', marginTop: "20px"  }} />
                        <TbBrandReactNative title='React Native' style={{ color: '#61DAFB', marginTop: "20px"  }} />
                        <SiVite title='Vite.js' style={{ color: '#646CFF', marginTop: "20px"  }} />                    
                    </div>
                )}
            </div>
        </div>
    );
};

export default SkillFrontCard;
