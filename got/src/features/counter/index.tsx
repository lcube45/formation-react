import React, { useState } from 'react';
import {useAppDispatch, useAppSelector} from '../../store/'
import { increment, decrement, incrementByAmount, decrementByAmount, resetCounter } from '../../reducers/counter';


const Counter: React.FC = () => {

    const { counterValue } = useAppSelector((state) => state.counter);
    const dispatch = useAppDispatch();
    const [incAmount, setIncAmount] = useState(10);

    return(
        <blockquote>
            <h3>My Counter</h3>
            <p>Count: {counterValue}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementByAmount(10))}>Increment by 10</button>
            <button onClick={() => dispatch(decrementByAmount(10))}>Decrement by 10</button>
            <button onClick={() => dispatch(resetCounter())}>Reset</button>
        </blockquote>
    )
}

export default Counter;
