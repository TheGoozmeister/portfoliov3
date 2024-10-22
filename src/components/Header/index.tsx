import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';  // Importation de Link et useLocation

const logo = require('../../assets/logo.png');

function Header(): JSX.Element {

    const [showMenu, setShowMenu] = useState(true);
    const location = useLocation();  // Utilisation du hook useLocation pour connaître la page actuelle

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1224) {
                setShowMenu(false);
            } else {
                setShowMenu(true);
            }
        };
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        if (window.innerWidth <= 1224) {
            setShowMenu(!showMenu);
        }
    };

    const handleNavigation = (anchor: string) => {
        setShowMenu(false);  
        if (location.pathname !== '/') {
            window.location.href = `/#${anchor}`;
        } else {
            const element = document.getElementById(anchor);
            element?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="header">
            <div className="header__logo">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            {window.innerWidth <= 1224 &&
                <div className="header__burger" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            }
            {showMenu &&
                <nav className="header__nav">
                    <Link to="/#home" onClick={() => handleNavigation('home')}>Accueil</Link>
                    <Link to="/#skills" onClick={() => handleNavigation('skills')}>Compétences</Link>
                    <Link to="/#projects" onClick={() => handleNavigation('projects')}>Projets</Link>
                    <Link to="/#contact" onClick={() => handleNavigation('contact')}>Contact</Link>
                </nav>
            }
        </header>
    );
}

export default Header;
