import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../../service/service';
import Person from '../../service/model';
import MyForm from '../form';
import axios from 'axios';

interface ListProps {
  title: string
}

const List: React.FC<ListProps> = (props: ListProps) => {

    const [persons, setPersons] = useState<Person[]>([])

    useEffect(() => {
      axios.get('https://thronesapi.com/api/v2/Characters')
      .then(response => {
        const persons =  response.data.map((item: any) => ({
                  id: item.id,
                  name: item.firstName,
                  img: item.imageUrl,
                  title: item.title,
                  biography: item.family
          }))
          setPersons(persons)
      })
      .catch(error => {
          console.log(error)
      })
    }, [])

    const addPerson = (name: string) => {
      const person: Person = {
        id: 1,
        name,
        img: `https://picsum.photos/100/100?random=${Math.random()}`,
        title: 'kkk',
        biography: 'jjj'
      }
      setPersons(persons.concat([person]));
    }

    return (
        <>
          <h1>{props.title}</h1>

          <MyForm addPerson={addPerson} />

          {persons.map((item, key) => {
            return (
              <div key={key}>
                <h2>{item.name}</h2>
                <Link to={`/person/${item.id}`}><img src={item.img} width="50" height="50" /></Link>
                <hr />
              </div>
            );
          })}
        </>
      )
}

export default List;

