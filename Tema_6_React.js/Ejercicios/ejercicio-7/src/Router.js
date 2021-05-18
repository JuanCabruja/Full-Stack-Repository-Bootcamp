import react from 'react'
import {BrowserRouter, Route, Switch, NavLink, useHistory} from 'react-router-dom';
import './Router.css'
import {createContext, useState, useEffect}  from 'react'

import MainPage from './Pages/MainPage';
import MovieDetails from './Pages/MovieDetails';
import Error from './Pages/Error';
import Footer from './Components/Footer';
import Menu from './Components/Menu';
import SearchedPaged from './Pages/SearchedPage';



export const UpcomingContext = createContext({});


export default function Router() {

  const [movies, setMovies] = useState([]);

  
  const LATEST_MOVIES = 'https://api.themoviedb.org/3/movie/upcoming?api_key=377ddf2705edd281e4988690055ef69f&language=en-US';

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

         
          
                <UpcomingContext.Provider value={{movies, setMovies}}>

                    <Menu />

                    <Switch >
                        <Route exact path='/' component={MainPage}/>
                        <Route path='/details/:movieId' component={MovieDetails}/>
                        <Route path='/search/:searchText' component={SearchedPaged} />
                        <Route component={Error} /> 
                    </Switch>

                </UpcomingContext.Provider>

                <Footer />

            </BrowserRouter>

            

        </div>
    )
}
