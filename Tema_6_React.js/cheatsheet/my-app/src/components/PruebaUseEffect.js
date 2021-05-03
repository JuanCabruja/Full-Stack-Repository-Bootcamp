import React from 'react';
import { useEffect, useState } from 'react';

export default function PruebaUseEffect() {

    const [count, setCount] = useState(0);

    console.log("Me ejecuto cada vez que cambia el componente");

    useEffect(() => {
        console.log("Acabo de montarme");

        return () => {
           console.log("Me desmonto");
        }
    }, [])

    useEffect(() => {
        document.title = count;
    }, [count])


    return (
        <div>
            Hola mundo, soy useEffect

            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}
