import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import Person from './pages/person';
import PersonsPage from './pages/persons';

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
        <footer style={{background: "red", padding: "10px"}}>footer</footer>
        </>
    )
}

export default Detail;
