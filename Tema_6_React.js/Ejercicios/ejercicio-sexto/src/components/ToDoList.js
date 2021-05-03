import React from 'react'
import { useState, useEffect } from 'react'
import './ToDoList.css'

import {useContext} from 'react';
import {GlobalContext} from '../Router';

export default function ToDoList( ) {

    const {toDos, setToDos} = useContext(GlobalContext);

    const removeToDo = title => setToDos(toDos.filter(todo => todo.title !== title))

    const fulfilled = (e, index) => {
        if (e.target.tagName !== "BUTTON") {
        const newToDos = [...toDos];
        
        newToDos[index].completed = !newToDos[index].completed;
    
        setToDos(newToDos)
         }
        // Alternativa
        // setToDos(currentTodos => currentTodos.map((todo, idx) => {
        //         return idx === index ? {...todo, completed: !todo.completed} : todo;
        // }));

    }



    return (

        <div>
            
            <ul className="list-group" >

                {toDos.map((ToDo, index) => {

                    // const ClassName = `list-group-item ${ToDo.completed && "completed"}`;

                    return  (

                        <>
                            <li className={`d-flex justify-content-between list-group-item ${ToDo.completed ? "completed bg-dark text-light" : ""}`} 
                            onClick={e => fulfilled(e, index)}>

                                To-do: {index} Título: {ToDo.title}   

                                <button className="btn btn-danger" onClick={() => removeToDo(ToDo.title)} id={ToDo.userID}>X</button>

                            f
                            </li>  
                        
                        </>
                
                    );    
                })}

            </ul>

        </div>
    )
}
