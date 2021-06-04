
import './App.css';
import Pages from './pages/Pages';
import Public from './pages/Public';
import Dashboard from './pages/Dashboard';

import {BrowserRouter} from "react-router-dom";

function App() {
  return (
   <>
   <BrowserRouter >
    <Pages/>
    <Dashboard />


   </BrowserRouter>
   </>
   
  );
}

export default App;
