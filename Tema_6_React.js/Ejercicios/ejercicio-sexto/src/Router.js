import react from 'react'
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import './Router.css'
import {createContext, useState, useEffect}  from 'react'

import Ejercicio1 from './pages/Ejercicio1';
import Ejercicio2 from './pages/Ejercicio2';
import Ejercicio3 from './pages/Ejercicio3';
import Ejercicio4 from './pages/Ejercicio4';
import Error from './pages/Error';

import { useFetch } from "./Hooks/useFetch";

export const GlobalContext = createContext({});

// import Dashboard from './pages/Dashboard';
// import Record from './pages/Record';
// import Error from './pages/Error';

export default function Router() {

    // Estado del Ejercicio 3

    let initialContactState = [

        {Nombre: 'Juan', Apellidos: 'Simon', Dirección: 'Su Casa, 9', Ciudad: 'Alicante', cPostal: 33999, Teléfono: 857489},
        {Nombre: 'Elver', Apellidos: 'Larga', Dirección: 'Su Casa, 20', Ciudad: 'Madrid', cPostal: 35567, Teléfono: 938575},
        {Nombre: 'Mayte', Apellidos: 'Chacín', Dirección: 'Su Casa, 77', Ciudad: 'Granada', cPostal: 60587, Teléfono: 8573489}, 
    ]

    const [contacts, setContacts] = useState(initialContactState);

    // Estado del Ejercicio 4

    const [toDos, setToDos] = useState([]);

    const API_TODOS = "https://jsonplaceholder.typicode.com/todos";

    useFetch(API_TODOS, setToDos);



    return (
        <div>
            <BrowserRouter >

                <nav className='d-flex justify-content-around bg-dark p-2'>

                    
                    <NavLink to='/Ejercicio1' className='text-decoration-none text-light font-weight-bold' activeClassName='active'>Ejercicio 1</NavLink>
                    <NavLink to='/Ejercicio2' className='text-decoration-none text-light font-weight-bold' activeClassName='active'>Ejercicio 2</NavLink>
                    <NavLink to='/Ejercicio3' className='text-decoration-none text-light font-weight-bold' activeClassName='active'>Ejercicio 3</NavLink>
                    <NavLink to='/Ejercicio4' className='text-decoration-none text-light font-weight-bold' activeClassName='active'>Ejercicio 4</NavLink>
                    
                </nav>
                

                <GlobalContext.Provider value={{contacts, setContacts, API_TODOS, toDos, setToDos}}>
                    <Switch >
                        <Route exact path='/Ejercicio1'component={Ejercicio1}/>
                        <Route path='/Ejercicio2'component={Ejercicio2}/>
                        <Route path='/Ejercicio3'component={Ejercicio3}/>
                        <Route path='/Ejercicio4'component={Ejercicio4}/>
                        <Route component={Error} />
                    </Switch>
                </GlobalContext.Provider>
            </BrowserRouter>
            <h2 className='d-flex text-light font-weight-bold justify-content-center bg-dark p-2'>Footer Común</h2>
        </div>
    )
}
