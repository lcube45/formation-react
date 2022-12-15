import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Person from '../../service/model';
import MyForm from '../form';
import { useAppDispatch, useAppSelector } from '../../store';
import { addPersons, fetchPersons } from '../../reducers/persons';

interface ListProps {
  title: string
}

const List: React.FC<ListProps> = (props: ListProps) => {

    const dispatch = useAppDispatch()
    const { persons, isFetching} = useAppSelector((state) => state.persons)

    useEffect(() => {
      if(persons.length === 0) {
        dispatch(fetchPersons());
      }
    }, [persons.length])

    const addPerson = (name: string) => {
      const person: Person = {
        id: 1,
        name,
        img: `https://picsum.photos/100/100?random=${Math.random()}`,
        title: 'kkk',
        biography: 'jjj'
      }

      dispatch(addPersons([person]))
    }

    return (
        <>
          <h1>{props.title}</h1>

          <MyForm addPerson={addPerson} />

          {isFetching && 'Loading...'}

          {!isFetching && persons.map((item, key) => {
            return (
              <div key={key}>
                <h2>{item.name}</h2>
                <Link to={`/person/${item.id}`}><img src={item.img} width="50" height="50" alt="illustration" /></Link>
                <hr />
              </div>
            );
          })}
        </>
      )
}

export default List;

