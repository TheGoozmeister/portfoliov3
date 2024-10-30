import Button from "../../components/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faTerminal,faScrewdriverWrench, faPeopleGroup, faAt}  from '@fortawesome/free-solid-svg-icons';
import CardProject from '../../components/CardProject';
import projects from '../../data/projects.json';
const photo = require('../../assets/photo.jpg');
const banner = require('../../assets/banner.png');


function Landing () : JSX.Element {

    return (    
        <div className="landing">
            <div className="landing__title" id='home'>
                <h1>Concepteur Développeur d'Applications Full Stack</h1>
                <div className="landing__title__text">
                    Coder des solutions simples pour des problématiques complexes.
                </div>
                <div className="landing__title__image">
                    <img src={photo} alt="portrait" />
                </div>
            </div>
            <div className="landing__banner">
                <img src={banner} alt="banner" />
            </div>
            <div className="landing__presentation" id='skills'>
                <div className="landing__presentation__title">
                    <h2>Je suis Vincent Pastor, bienvenue !</h2>
                </div>
                <div className="landing__presentation__text">
                    Après une première vie artistique partagée entre création et transmission, je consacre depuis maintenant trois ans mon temps 
                    à une passion qui m'accompagne depuis l'enfance : le code. Jour après jour, jévolue et je grandis dans ce domaine, ajoutant constamment de nouvelles cordes à mon arc.
                </div>
            </div>
            <div className="landing__skills">
                <div className="landing__skills__section">
                    <div className="landing__skills__section__logo">
                        <FontAwesomeIcon icon={faCode} />
                    </div>
                    <div className="landing__skills__section__title">
                        <h3>Frontend</h3>
                    </div>
                    <div className="landing__skills__section__description">
                        J'aime mettre sur pied des applications web responsive et dynamiques, en optimisant les performances. J'apprends constamment de nouvelles technologies pour augmenter ma palette de compétences.
                    </div>
                    <div className="landing__skills__section__listTitle">
                        <h4>Technologies</h4>
                    </div>
                    <div className="landing__skills__section__list">
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>React/Redux</li>
                            <li>Sass</li>
                            <li>Bootstrap</li>
                            <li>Rechart</li>
                            <li>Android Studio</li>
                        </ul>
                    </div>
                </div>
                <div className="landing__skills__section">
                    <div className="landing__skills__section__logo">
                        <FontAwesomeIcon icon={faTerminal} />
                    </div>
                    <div className="landing__skills__section__title">
                        <h3>Backend</h3>
                    </div>
                    <div className="landing__skills__section__description">
                        J'aime trouver les manières optimales pour organiser et mettre à disposition des données à travers des API REST sécurisées et performantes.
                    </div>
                    <div className="landing__skills__section__listTitle">
                        <h4>Technologies</h4>
                    </div>
                    <div className="landing__skills__section__list">
                        <ul>
                            <li>NodeJS</li>
                            <li>Express</li>
                            <li>Django</li>
                            <li>PHP</li>
                            <li>PostgreSQL</li>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                </div>
                <div className="landing__skills__section">
                    <div className="landing__skills__section__logo">
                        <FontAwesomeIcon icon={faScrewdriverWrench} />                    
                    </div>
                    <div className="landing__skills__section__title">
                        <h3>Outils</h3>
                    </div>
                    <div className="landing__skills__section__description">
                        Afin d'optimiser mon travail, j'utilise des outils adaptés à chaque tâche. En veille permanente, j'intègre régulièrement de nouveaux outils à ma palette pour améliorer ma productivité.
                    </div>
                    <div className="landing__skills__section__listTitle">
                        <h4>Technologies</h4>
                    </div>
                    <div className="landing__skills__section__list">
                        <ul>
                            <li>Git/Github</li>
                            <li>Docker</li>
                            <li>Figma</li>
                            <li>Capacitor</li>
                            <li>Linux</li>
                            <li>Bluetooth/Bluetooth Low Energy</li>
                            <li>Wifi Direct</li>
                            <li>IA</li>
                        </ul>
                    </div>
                </div>
                <div className="landing__skills__section">
                    <div className="landing__skills__section__logo">
                        <FontAwesomeIcon icon={faPeopleGroup} />                    
                    </div>
                    <div className="landing__skills__section__title">
                        <h3>Soft Skills</h3>
                    </div>
                    <div className="landing__skills__section__description">
                        Au travers de mes différentes expériences professionnelles et personnelles, j'ai développé des compétences individuelles et collectives qui me permettent d'être un élément pertinent au sein d'une équipe.
                    </div>
                    <div className="landing__skills__section__listTitle">
                        <h4>Compétences</h4>
                    </div>
                    <div className="landing__skills__section__list">
                        <ul>
                            <li>Gestion du temps</li>
                            <li>Gestion de la pression</li>
                            <li>Curiosité</li>
                            <li>Adaptabilité</li>
                            <li>Autonomie</li>
                            <li>Persévérance</li>
                            <li>Esprit d'équipe</li>
                            <li>Capacités d'écoute et d'empathie</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="landing__projects" id="projects">
                <div className="landing__projects__title">
                    <h2>Mes projets récents</h2>
                </div>
                <div className="landing__projects__text">
                    Voici quelques projets que j'ai réalisés. Vous voulez en voir plus ? 
                    <a href="mailto:vincent.pastor.pro@gmail.com" id="contactMe"> Contactez moi !</a>                </div>
                <div className="landing__projects__list">
                {projects.slice(0, 6).map((project) => (
                    <CardProject
                        key={project.id}
                        title={project.title}
                        description={project.description.fr}
                        media={project.cover}
                        id={project.id.toString()}
                    />
                    ))}
                </div>
                <div className="landing__projects__button"></div>
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
    );
}


export default Landing;