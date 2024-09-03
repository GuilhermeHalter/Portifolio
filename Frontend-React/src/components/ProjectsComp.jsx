import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/Components/ProjectsComp.css';
import { IoIosExit } from "react-icons/io";

const projects = [
   
];

const ProjectsComp = () => {
    const [isGithubModalOpen, setGithubModalOpen] = useState(false);
    const [isSiteModalOpen, setSiteModalOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState({});

    const openModals = (project) => {
        setCurrentProject(project);

        if (project.site) {
            setSiteModalOpen(true);
        }
        
        setGithubModalOpen(true);
    };

    const closeModals = () => {
        setGithubModalOpen(false);
        setSiteModalOpen(false);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        arrows: true,
    };

    return (
        <div className="Container" id='projects'>
            <h1 className="titleAbout">Projects</h1>
            <Slider {...settings} className="carousel">
                {projects.map((project, index) => (
                    <div key={index} className="project-card" onClick={() => openModals(project)}>
                        <img src={project.img} alt="project" />
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                    </div>
                ))}
            </Slider>

            {(isGithubModalOpen || isSiteModalOpen) && (
                <div className="modal-background"></div>
            )}

            {isSiteModalOpen && (
                <div className="modal modal-site">
                    <div className="modal-content">
                        <h2>Ir para o Site</h2>
                        <p>Deseja visitar o site do projeto?</p>
                        <button onClick={() => window.open(currentProject.site, "_blank")}>Visitar</button>
                    </div>
                </div>
            )}

            {isGithubModalOpen && (
                <div className="modal modal-github">
                    <div className="modal-content">
                        <h2>Ir para o GitHub</h2>
                        <p>Deseja visitar o repositório no GitHub?</p>
                        <button onClick={() => window.open(currentProject.github, "_blank")}>Visitar</button>
                    </div>
                </div>
            )}

            {(isGithubModalOpen || isSiteModalOpen) && (
                <button className="close-modals-button" onClick={closeModals}>
                    Sair <IoIosExit className='iconExit'/>
                </button>
            )}
        </div>
    );
};

export default ProjectsComp;
