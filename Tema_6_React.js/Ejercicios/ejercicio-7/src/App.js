import {useEffect, useState, createContext} from 'react';
import MainPage from './Pages/MainPage';
import './App.css';

export const GlobalContext = createContext();




function App() {

  const [movies, setMovies] = useState([]);

  const IMAGE_LINK = "https://image.tmdb.org/t/p/w500"

  const LATEST_MOVIES = 'https://api.themoviedb.org/3/movie/upcoming?api_key=377ddf2705edd281e4988690055ef69f&language=en-US'

  useEffect(() => {
    fetch(LATEST_MOVIES)
      .then(response => response.json())
      .then(data => setMovies(data.results));
    return () => {
    }
  }, [])

  return (
    <>
      < MainPage movies={movies} setMovies={setMovies} IMAGE_LINK = {IMAGE_LINK}/>
      {console.log(movies)}
    </>
  );
}

export default App;
