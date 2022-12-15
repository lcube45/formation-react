import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface HomePageProps {

}

const HomePage: React.FC<HomePageProps> = (props: HomePageProps) => {

    const { t, i18n } = useTranslation();

    return(
        <>
        <h1>{ t('welcome') }</h1>
        <p>Lorem ipsum</p>
        <button onClick={() => i18n.changeLanguage('en')}>Switch language EN</button>
        <button onClick={() => i18n.changeLanguage('fr')}>Switch language FR</button>
        <p><Link to="/persons">Home</Link></p>
        </>
    )
}

export default HomePage;
