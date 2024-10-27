import React, { useState } from 'react';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';


function CardProject({ title, description, image, id }: { title: string, description: string, image: string, id: string }) {
    
    const [isHovered, setIsHovered] = useState(false);
    const imgSrc = require(`../../assets/img/${image}`);
    const navigate = useNavigate();
    
    return (
        <div 
            className="cardProject"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ backgroundImage: isHovered ? 'none' : `url(${imgSrc})` }}
        >
            {!isHovered ? (
                <h3 className="cardProject__title"></h3>
            ) : (
                <div className="cardProject__content">
                    <div className="cardProject__content__description">{description}</div>
                    <Button onClick={() => navigate(`/project/${id}`)}>Voir le projet</Button>
                </div>
            )}
        </div>
    );
}

export default CardProject;
