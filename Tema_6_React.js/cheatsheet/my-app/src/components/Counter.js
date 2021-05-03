import React from 'react';
import { useState } from 'react';

export default function Counter() {

    // const state = useState(0); //El 0 es el valor inicial   
    // const count = state[0];
    // const setCount = state[1];

    const [count, setCount] = useState(0);

    const handleClick = function (evento) {
        setCount(count + 1);
    }

    return (
        <div>
            <p>Has hecho Click {count} veces</p>
            <button onClick={handleClick}>Clicker</button>
            <button onClick={() => {setCount(count - 1)}}>Reducir</button>
            <button onClick={() => {setCount(count - count)}}>reset</button>
        </div>
    )
}
