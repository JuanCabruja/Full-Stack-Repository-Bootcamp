import './App.css';
import {useState, useEffect } from 'react';
import ToDoList from './components/ToDoList'
import InputList from './components/InputList'
import 'bootstrap/dist/css/bootstrap.css'
import { useFetch } from "./hooks/useFetch";

function App() {




// useEffect(() => {
//   const URL = "https://jsonplaceholder.typicode.com/todos";
//   fetch(URL) 
//     .then(res => res.json())
//     .then(data => setToDos(data.slice(0, 20)));
//   return () => {
   
//   }
// }, [])



const [toDos, setToDos] = useState([]);



const API_TODOS = "https://jsonplaceholder.typicode.com/todos";

//Hook personalizado

useFetch(API_TODOS, setToDos);


  return (
    <div className="App">
      <h2>ToDo List</h2>
       <InputList toDos={toDos} setToDos={setToDos}/>
       <ToDoList  toDos={toDos} setToDos={setToDos}/>
      
    </div>
  );
}

export default App;

// ToDoArray={ToDoArray}