import React from 'react';
import Character from '../../data/model'

interface DetailProps {
    character: Character
}

const Detail: React.FC<DetailProps> = (props: DetailProps) => {
    return(
        <blockquote>
            <h3>Détail</h3>
            <p>{props.character.id}</p>
            <p>{props.character.name}</p>
            <p>{props.character.img}</p>
            <p>{props.character.title}</p>
            <p>{props.character.biography}</p>
        </blockquote>
    )
}

export default Detail;
