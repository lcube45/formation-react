import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import CounterPage from './pages/counter';
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
                <Route path="/counter" element={<CounterPage />} />
            </Routes>
        </header>
        <MyFooter color="blue">footer</MyFooter>
        </>
    )
}

export default Detail;
