import React, { useState } from 'react';
import '../../styles/Components/card/SkillCardComp.css';

import { SiPostgresql, SiMysql, SiMicrosoftsqlserver, SiDjango } from "react-icons/si";
import { FaCircleArrowDown, FaCircleArrowUp } from "react-icons/fa6";

const SkillBackCard = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCard = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`skill-card ${isOpen ? 'open' : ''}`}>
            <div className="card-header" onClick={toggleCard}>
                <h3>Back-end</h3>
                <span className="arrow">{isOpen ? <FaCircleArrowUp style={{ fontSize: "20px", marginTop:"10px" }}/> : <FaCircleArrowDown style={{ fontSize: "20px", marginTop:"10px" }}/>}</span>
            </div>
            <div className={`card-body ${isOpen ? 'open' : ''}`}>
                {isOpen && (
                    <div>
                        <SiPostgresql style={{ color: '#336791' }} />
                        <SiMysql style={{ color: '#4479A1' }} />
                        <SiMicrosoftsqlserver style={{ color: '#CC2927'  }} />
                        <SiDjango style={{ color: '#092E20', marginTop: "30px"  }} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default SkillBackCard;
