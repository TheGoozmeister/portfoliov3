import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


function Footer() {
    return (
        <div className="footer">
            <div className="footer__name">
                Vincent Pastor
            </div>
            <div className="footer__social">
                <a href="https://www.linkedin.com/in/vincent-pastor-739621146/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://github.com/TheGoozmeister" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="mailto:vincent.pastor.pro@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} /></a>
            </div>
            <div className="footer__text">
                Portfolio développé avec React et hébergé par Vercel
            </div>
        </div>
    );
}

export default Footer;