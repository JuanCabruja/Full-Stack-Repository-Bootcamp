import './App.css';
import FirstComponent, {SecondComponent, ThirdComponent} from './components/FirstComponent.js';
import Counter from './components/Counter.js';
import PruebaUseEffect from './components/PruebaUseEffect'
import { createContext, useEffect, useState } from 'react';
import UseContextComponent from './components/UseContextComponent'
import Router from './Router';

// El use Context lo hacemos fuera de la Función/Componente porque lo exportaremos directamente desde aquí 
// Podríamos hacerlo también en otro archivo

export const GlobalContext = createContext();



function App() {
  
// // Utilizando el useState para un Booleano

//   const [show, setShow] = useState(true)

//   const URL = "raw.githubusercontent.com/BC-FSWD/todo-list/master/todo-list.json"

// // Use Effect

//   useEffect(() => {
    
//     fetch(URL)
//     .then(response => response.json())
//     .then(data => console.log(data));
//     return () => {

//     }
//   }, [])



  return (
    <div className="App">
    {/* <Counter />
    <FirstComponent title="Título enviado desde el padre" date="25 de Agosto de 2025" />
    <FirstComponent title="Segundo título enviado con props" date="45 de Febrero del 2052"/>
    <FirstComponent title="Tercer Título enviado desde el padre" />

    <SecondComponent />
    <ThirdComponent /> */}

    {/* {show && <PruebaUseEffect />}
    <button onClick={() => setShow(!show)}>show</button> */}
    
    {/* <GlobalContext.Provider value="Soy un string guardado en un contexto">
      <UseContextComponent />
    </GlobalContext.Provider> */}
    
    <Router />
    </div>
  );
}


export default App;
