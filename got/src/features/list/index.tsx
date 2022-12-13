import React, { useEffect, useState } from 'react';
import Data from '../../data/data';
import Character from '../../data/model';
import Detail from '../detail';
import Basic from '../form/basic';

interface ListProps {
  title: string
}

const List: React.FC<ListProps> = (props: ListProps) => {

    const [persons, setPersons] = useState<Character[]>([])
    const [selectedPerson, setSelectedPerson] = useState<Character>();

    useEffect(() => {
      const data = new Data();
      const items = data.persons;
      setPersons(items)
    }, [])

    const addCharacter = (name: string, img: string) => {
      const c: Character = {
        id: persons.length,
        name,
        img,
        title: 'kkk',
        biography: 'jjj'
      }

      setPersons(persons.concat([c]));
    }

    return (
        <>
          <h1>{props.title}</h1>

          <Basic addCharacter={addCharacter} />

          {selectedPerson && 
            <Detail character={selectedPerson} />          
          }

          {persons.map(item => {
            return (
              <div key={item.id} onClick={() => setSelectedPerson(item)}>
                <h2>id: {item.id}</h2>
                <h2>name: {item.name}</h2>
                <img src={item.img} />
                <hr />
              </div>
            );
          })}
        </>
      )
}

export default List;
