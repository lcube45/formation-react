import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Data from '../data/data';
import Character from '../data/model';
import Detail from '../features/detail';

interface PersonPageProps {

}

const PersonPage: React.FC<PersonPageProps> = (props: PersonPageProps) => {

    const {id} = useParams()
    const data = new Data()
    const person = data.persons.find(e => e.id == Number(id))

    return(
        <>
        <h1>Détail d'une personne</h1>
        { person &&
            <Detail person={person} />
        }
        <p><Link to="/persons">Back to list</Link></p>
        </>
    )
}

export default PersonPage;
