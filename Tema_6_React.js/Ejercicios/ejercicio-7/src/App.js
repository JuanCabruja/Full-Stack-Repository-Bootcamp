import {useEffect, useState, createContext} from 'react';
import MainPage from './Pages/MainPage';
import {useHistory} from 'react-router-dom';
import './App.css';

import Router from './Router';


function App() {

  return (
    <>
      <Router />
    </>
  );
}

export default App;
