import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/Components/ProjectsComp.css';
import { IoIosExit } from "react-icons/io";

const projects = [
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/portifolio-20d01.appspot.com/o/suiteStore.jpeg?alt=media&token=8996ea9f-6f21-48e2-bf0d-124bf2202914',
        title: 'Suite Store',
        description: "Suite Store is the project I created to simplify the management and control of your store's inventory. With it, you can keep everything under control, from inventory to sales.",
        github: 'https://github.com/GuilhermeHalter/Desafio-ponto-vendas-PDV-',
        site: 'https://desafio-ponto-vendas-pdv.vercel.app/'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/portifolio-20d01.appspot.com/o/ArduinoSuino.jpeg?alt=media&token=2b726efa-529d-4c03-aa40-626dccfc9125',
        title: 'Controle de Conforto Térmico em Creche de Suínos',
        description: 'I developed this project in my technical course in Computer Science, with the aim of controlling thermal comfort in the piglet nursery, using temperature and humidity sensors.',
        github: 'https://github.com/GuilhermeHalter/Projeto_ControleTermicoSuinos',
        site: '' // Este projeto não tem site
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/portifolio-20d01.appspot.com/o/Portifolio%2FprintMuseu.jpeg?alt=media&token=17beef85-cb23-4957-b9be-9448a1f78ab5',
        title: 'Museu do Velho Mundo',
        description: 'The Old World Museum is a project I created to simulate a virtual museum, where you can view artworks and sculptures by various renowned artists.',
        github: 'https://github.com/GuilhermeHalter/MuseuVelhoMundo-react',
        site: 'https://museu-velho-mundo-react.vercel.app/'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/portifolio-20d01.appspot.com/o/Portifolio%2FSolve4u.png?alt=media&token=a977aeb9-0998-45c3-97f3-4d9902522dc6',
        title: 'Solve4u',
        description: 'Solve4u is an online platform developed to streamline project management, providing an organized and efficient approach to coordinating tasks and team members.',
        github: 'https://github.com/GuilhermeHalter/Solve4u',
        site: 'https://solve4u.vercel.app/'
    },
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
