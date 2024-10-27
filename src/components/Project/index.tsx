import { useParams } from "react-router-dom";
import projects from "../../data/projects.json";
import Button from "../Button";
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAt}  from '@fortawesome/free-solid-svg-icons';

interface ProjectType {
    id: number;
    title: string;
    cover: string;
    description: {
        eng: string;
        fr: string;
    };
    technos: string[];
    tools: string[];
    summary: {
        eng: string;
        fr: string;
    };
    projectLink: string;
}


function Project() : JSX.Element {

    const { projectId } = useParams();
    const project = projects.find((project: ProjectType) => project.id.toString() === projectId);

    useEffect(()=>{
        window.scrollTo(0,0);
    })
    if (!project) {
        return <div>Projet non trouvé</div>;
    }

    return (
        <div className="project">
            <div className="project__title">
                <h2>{project.title}</h2>
            </div>
            <div className="project__content">
                <div className="project__text">
                    <div className="project__description">{project.description.fr}</div>
                    <div className="project__summary">{project.summary.fr}</div>
                    <div className="project__technosAndTools">
                        <div className="project__technos">
                            <div className="project__technos__title">Technologies :</div>
                            {project.technos.map((techno: string) => 
                                <div key={techno} className="project__techno">{techno}</div>)}
                        </div>
                        <div className="project__tools">
                            <div className="project__tools__title">Outils :</div>
                            {project.tools.map((tool: string) => 
                                <div key={tool} className="project__tool">{tool}</div>)}
                        </div>
                    </div>
                    <Button onClick={() => window.open(project.projectLink, '_blank')}>Voir le projet</Button>
                </div>
                <div className="project__images">
                    <img src={require(`../../assets/img/${project.cover}`)} alt={project.title} />
                </div>
            </div>
            <div className="landing__contact" id="contact">
                <div className="landing__contact__title">
                    <h2>Contactez-moi</h2>
                </div>
                <div className="landing__contact__text">
                    Envie de travailler ensemble ? N'hésitez pas à me partager vos attentes et nous arriverons ensemble à une solution optimale.
                </div>
                <a href="mailto:vincent.pastor.pro@gmail.com" className="landing__contact__button">
                    <div className="landing__contact__button__logo">
                        <FontAwesomeIcon icon={faAt} />
                    </div>
                    <div className="landing__contact__button__text">
                        Envoyer un mail
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Project;