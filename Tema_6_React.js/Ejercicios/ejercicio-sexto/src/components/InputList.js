import React, { useContext } from 'react'
import { useState } from 'react'
import { GlobalContext } from '../Router';

export default function InputList() {

    const { setToDos } = useContext(GlobalContext)
    const [newTodo, setNewToDo] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        setToDos(currentTodos => [{title: newTodo, completed: false, userId: 5}, ...currentTodos])
        
        setNewToDo("");
    }
    return (
       
            <form className="my-4 mx-4" onSubmit={handleSubmit}>
                <input className="form-control mb-3" 
                type="text"  
                onChange={e => setNewToDo(e.target.value)} 
                placeholder="Introduce una tarea "
                value={newTodo}/>   
            </form>
    
    )
}       
