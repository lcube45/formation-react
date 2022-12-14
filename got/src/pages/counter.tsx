import React from 'react';
import Counter from '../features/counter';

interface CounterPageProps {

}

const CounterPage: React.FC<CounterPageProps> = (props: CounterPageProps) => {

    return(
        <>
        <h1>Counter page</h1>
        <Counter />
        </>
    )
}

export default CounterPage;
