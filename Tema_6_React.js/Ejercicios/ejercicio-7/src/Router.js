import react from 'react'
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import './Router.css'
import {createContext, useState, useEffect}  from 'react'

import MainPage from './Pages/MainPage';
import MovieDetails from './Pages/MovieDetails';
import Error from './Pages/Error';
import Footer from './Components/Footer';
import Menu from './Components/Menu';


export const GlobalContext = createContext({});


export default function Router() {

  const [movies, setMovies] = useState([]);
  const LATEST_MOVIES = 'https://api.themoviedb.org/3/movie/upcoming?api_key=377ddf2705edd281e4988690055ef69f&language=en-US'

  useEffect(() => {
    fetch(LATEST_MOVIES)
      .then(response => response.json())
      .then(data => setMovies(data.results));
    return () => {
    }
  }, [])


    return (
        <div>

            <BrowserRouter >

                {/* <nav className='d-flex justify-content-around bg-dark p-2'> */}

                    
                    {/* <NavLink to='/' className='text-decoration-none text-light font-weight-bold' activeClassName='active'>Test</NavLink>
                    <NavLink to='/' className='text-decoration-none text-light font-weight-bold' activeClassName='active'>Test</NavLink>
                    <NavLink to='/' className='text-decoration-none text-light font-weight-bold' activeClassName='active'>Test</NavLink>
                    <NavLink to='' className='text-decoration-none text-light font-weight-bold' activeClassName='active'>Test</NavLink>
                     */}
                {/* </nav> */}
                
                <Menu />
                <GlobalContext.Provider value={{movies, setMovies}}>

                    <Switch >
                        <Route exact path='/'component={MainPage}/>
                        <Route path='/details/:movieId'component={MovieDetails}/>
                        <Route component={Error} /> 
                    </Switch>

                </GlobalContext.Provider>

                <Footer />

            </BrowserRouter>

            

        </div>
    )
}
