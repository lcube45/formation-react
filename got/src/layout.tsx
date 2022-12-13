import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import Person from './pages/person';
import PersonsPage from './pages/persons';
import './style.css'

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
        <footer className='my-footer'>footer</footer>
        </>
    )
}

export default Detail;
