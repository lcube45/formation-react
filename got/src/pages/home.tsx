import React from 'react';
import { Link } from 'react-router-dom';
import List from '../features/list';

interface HomePageProps {

}

const HomePage: React.FC<HomePageProps> = (props: HomePageProps) => {
    return(
        <>
        <h1>Welcome !</h1>
        <p>Lorem ipsum</p>
        <p><Link to="/persons">Home</Link></p>
        </>
    )
}

export default HomePage;
