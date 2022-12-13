import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import TestPage from './pages/test';

interface LayoutProps {

}

const Detail: React.FC<LayoutProps> = (props: LayoutProps) => {
    return(
        <>
        <header>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/test" element={<TestPage />} />
            </Routes>
        </header>
        <aside>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/test">Test</Link></li>
            </ul>
        </aside>
        <footer>footer</footer>
        </>
    )
}

export default Detail;
