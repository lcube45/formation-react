import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Detail from '../features/detail';
import { useAppDispatch, useAppSelector } from '../store';
import { getPersonById } from '../reducers/persons';

interface PersonPageProps {

}

const PersonPage: React.FC<PersonPageProps> = (props: PersonPageProps) => {

    const dispatch = useAppDispatch()
    const { person, isFetching } = useAppSelector((state) => state.persons)
    const {id} = useParams()

    useEffect(() => {        
        if(Number(id) !== person?.id) {
            dispatch(getPersonById(Number(id)));
        }
    }, [id])

    return(
        <>
        <h1>Détail d'une personne</h1>
        { person && !isFetching && 
            <Detail person={person} />
        }
        <p><Link to="/persons">Back to list</Link></p>
        </>
    )
}

export default PersonPage;
