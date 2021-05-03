import ToDoList from '../components/ToDoList'
import InputList from '../components/InputList'
import 'bootstrap/dist/css/bootstrap.css'
import {useState} from 'react';
import {useFetch} from '../Hooks/useFetch'




function Ejercicio4() {


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

useFetch(API_TODOS, setToDos);


  return (
    <div className="App">
      <h2>ToDo List</h2>
       <InputList />
       <ToDoList  />
      
    </div>
  );
}

export default Ejercicio4;

// ToDoArray={ToDoArray}