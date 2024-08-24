import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/Components/ProjectsComp.css';

const projects = [
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/portifolio-20d01.appspot.com/o/suiteStore.jpeg?alt=media&token=8996ea9f-6f21-48e2-bf0d-124bf2202914',
        title: 'Suite Store',
        description: 'A Suite Store é o projeto que criei para simplificar a gestão e controle de estoque da sua loja. Com ela, você pode manter tudo sob controle, desde o estoque até as vendas.',
        github: 'https://github.com/seu-usuario/suite-store',
        site: 'https://seu-site.com/suite-store'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/portifolio-20d01.appspot.com/o/ArduinoSuino.jpeg?alt=media&token=2b726efa-529d-4c03-aa40-626dccfc9125',
        title: 'Controle de Conforto Térmico em Creche de Suínos',
        description: 'Desenvolvi esse projeto no TCC do meu curso técnico em Informática, com o objetivo de controlar o conforto térmico na creche dos suínos, utilizando sensores de temperatura e umidade.',
        github: 'https://github.com/seu-usuario/controle-termico-suinos',
        site: 'https://seu-site.com/controle-termico-suinos'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/portifolio-20d01.appspot.com/o/Portifolio%2FprintMuseu.jpeg?alt=media&token=17beef85-cb23-4957-b9be-9448a1f78ab5',
        title: 'Museu do Velho Mundo',
        description: 'O Museu do Velho Mundo é um projeto que criei para simular um museu virtual, onde você pode visualizar obras de arte e esculturas de diversos artistas renomados.',
        github: 'https://github.com/seu-usuario/museu-velho-mundo',
        site: 'https://seu-site.com/museu-velho-mundo'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/portifolio-20d01.appspot.com/o/Portifolio%2FSolve4u.png?alt=media&token=a977aeb9-0998-45c3-97f3-4d9902522dc6',
        title: 'Solve4u',
        description: 'O Solve4u é uma plataforma online desenvolvida para agilizar a gestão de projetos, proporcionando uma abordagem organizada e eficiente para coordenar tarefas e membros da equipa.',
        github: 'https://github.com/seu-usuario/solve4u',
        site: 'https://seu-site.com/solve4u'
    },
];

const ProjectsComp = () => {
    const [isGithubModalOpen, setGithubModalOpen] = useState(false);
    const [isSiteModalOpen, setSiteModalOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState({});

    const openModals = (project) => {
        setCurrentProject(project);
        setGithubModalOpen(true);
        setSiteModalOpen(true);
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
        <div className="Container">
            <h1>Projetos</h1>
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
                <div className="modal-background" onClick={closeModals}></div>
            )}

            {isSiteModalOpen && (
                <div className="modal modal-site">
                    <div className="modal-content">
                        <h2>Ir para o Site</h2>
                        <p>Deseja visitar o site do projeto?</p>
                        <button onClick={() => window.open(currentProject.site, "_blank")}>Sim</button>
                        <button onClick={closeModals}>Não</button>
                    </div>
                </div>
            )}

            {isGithubModalOpen && (
                <div className="modal modal-github">
                    <div className="modal-content">
                        <h2>Ir para o GitHub</h2>
                        <p>Deseja visitar o repositório no GitHub?</p>
                        <button onClick={() => window.open(currentProject.github, "_blank")}>Sim</button>
                        <button onClick={closeModals}>Não</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectsComp;
