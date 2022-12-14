import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import Person from './pages/person';
import PersonsPage from './pages/persons';
import { MyFooter } from './styles';

interface LayoutProps {

}

const Detail: React.FC<LayoutProps> = (props: LayoutProps) => {
    return(
        <>
        <header>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/persons" element={<PersonsPage />} />
                <Route path="/person/:id" element={<Person />} />
            </Routes>
        </header>
        <MyFooter color="blue">footer</MyFooter>
        </>
    )
}

export default Detail;
