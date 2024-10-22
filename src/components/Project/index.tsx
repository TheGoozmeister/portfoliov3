import { useParams } from "react-router-dom";
import projects from "../../data/projects.json";
import Button from "../Button";

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
            
        </div>
    )
}

export default Project;