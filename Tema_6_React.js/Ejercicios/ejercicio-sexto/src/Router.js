import react from 'react'
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import './Router.css'

import Ejercicio1 from './pages/Ejercicio1';
import Ejercicio2 from './pages/Ejercicio2';
import Ejercicio3 from './pages/Ejercicio3';
import Ejercicio4 from './pages/Ejercicio4';

import Error from './pages/Error';


// import Dashboard from './pages/Dashboard';
// import Record from './pages/Record';
// import Error from './pages/Error';

export default function Router() {
    return (
        <div>
            <BrowserRouter >

                <nav className='d-flex justify-content-around bg-dark p-2'>

                    
                    <NavLink to='/Ejercicio1' className='text-decoration-none text-light font-weight-bold' activeClassName='active'>Ejercicio 1</NavLink>
                    <NavLink to='/Ejercicio2' className='text-decoration-none text-light font-weight-bold' activeClassName='active'>Ejercicio 2</NavLink>
                    <NavLink to='/Ejercicio3' className='text-decoration-none text-light font-weight-bold' activeClassName='active'>Ejercicio 3</NavLink>
                    <NavLink to='/Ejercicio4' className='text-decoration-none text-light font-weight-bold' activeClassName='active'>Ejercicio 4</NavLink>
                    
                </nav>
                

                <Switch >
 
                    <Route exact path='/Ejercicio1'component={Ejercicio1}/>
                    <Route path='/Ejercicio2'component={Ejercicio2}/>
                    <Route path='/Ejercicio3'component={Ejercicio3}/>
                    <Route path='/Ejercicio4'component={Ejercicio4}/>

                    <Route component={Error} />

                </Switch> 
            </BrowserRouter>
            <h2 className='d-flex text-light font-weight-bold justify-content-center bg-dark p-2'>Footer Común</h2>
        </div>
    )
}
