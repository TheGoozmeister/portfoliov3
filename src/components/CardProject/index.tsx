import React, { useState } from 'react';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

function CardProject({ title, description, media, id }: { title: string, description: string, media: string, id: string }) {
    
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    // Détermine si le media est une vidéo en vérifiant l'extension
    const isVideo = media.endsWith('.mp4') || media.endsWith('.webm');
    const mediaSrc = require(`../../assets/${isVideo ? 'videos' : 'img'}/${media}`);
    
    return (
        <div 
            className="cardProject"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                backgroundColor: isHovered ? 'white' : 'transparent', // Fond blanc au survol
                backgroundImage: !isVideo && !isHovered ? `url(${mediaSrc})` : 'none' // Image en fond si ce n'est pas une vidéo et pas de survol
            }}
        >
            {isVideo && !isHovered && (
                <video
                    className="cardProject__media"
                    src={mediaSrc}
                    muted
                    loop
                    autoPlay
                    playsInline
                />
            )}
            {isHovered && (
                <div className="cardProject__content">
                    <div className="cardProject__content__description">{description}</div>
                    <Button onClick={() => navigate(`/project/${id}`)}>Voir le projet</Button>
                </div>
            )}
        </div>
    );
}

export default CardProject;
