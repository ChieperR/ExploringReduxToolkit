// Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../store/favorites/counter.slice.js';

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(decrement())}>-</button>
            <span>{count}</span>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
        </div>
    );
};

export default Counter;
