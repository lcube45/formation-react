import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Data from '../service/service';
import Character from '../service/model';
import Detail from '../features/detail';
import axios from 'axios';
import Person from '../service/model';

interface PersonPageProps {

}

const PersonPage: React.FC<PersonPageProps> = (props: PersonPageProps) => {

    const [person, setPerson] = useState<Person>()
    const {id} = useParams()

    axios.get('https://thronesapi.com/api/v2/Characters/' + id)
      .then(response => {
        const person = {
            id: response.data.id,
            name: response.data.firstName,
            img: response.data.imageUrl,
            title: response.data.title,
            biography: response.data.family
        }
        setPerson(person)
      })
      .catch(error => {
          console.log(error)
      })

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
