import React from 'react';
import Person from '../../service/model'

interface DetailProps {
    person: Person
}

const Detail: React.FC<DetailProps> = (props: DetailProps) => {
    return(
        <blockquote>
            <h3>Détail</h3>
            <p>{props.person.name}</p>
            <p><img src={props.person.img} /></p>
            <p>{props.person.title}</p>
            <p>{props.person.biography}</p>
        </blockquote>
    )
}

export default Detail;
