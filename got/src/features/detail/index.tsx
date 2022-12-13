import React from 'react';
import Character from '../../data/model'

interface DetailProps {
    person: Character
}

const Detail: React.FC<DetailProps> = (props: DetailProps) => {
    return(
        <blockquote>
            <h3>Détail</h3>
            <p>{props.person.id}</p>
            <p>{props.person.name}</p>
            <p><img src={props.person.img} /></p>
            <p>{props.person.title}</p>
            <p>{props.person.biography}</p>
        </blockquote>
    )
}

export default Detail;
