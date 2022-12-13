import React from 'react';
import List from '../features/list';

interface PersonsPageProps {

}

const PersonsPage: React.FC<PersonsPageProps> = (props: PersonsPageProps) => {
    return(
        <>
        <List title="Liste des personnes" />
        </>
    )
}

export default PersonsPage;
