import React from 'react'
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

import {useContext} from 'react';
import {UpcomingContext} from '../Router';

import MovieCard from '../Components/MovieCard';
import { useParams } from 'react-router-dom';
import { useFetch } from '../Hooks/useFetch';

import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import './BaseDesign.css';

export default function SearchedPage() {

    const [moviesSearch, setMoviesSearch] = useState({});
    const { searchText } = useParams();

    useFetch(`https://api.themoviedb.org/3/search/movie?api_key=377ddf2705edd281e4988690055ef69f&language=en-US&query=${searchText}&page=1&include_adult=true`, setMoviesSearch);
   
    const movies = moviesSearch.results;

    return (

        <div className='container-fluid background-color-base  my-10 '>
           
            <div className="d-flex justify-content-center text-light pt-4 pb-0 font-weight-bold">
    
               <h1 className='font-weight-bold'>ESTAMOS EN EL SEARCHEDPAGE</h1>

            </div>

            <div className='row justify-content-around pt-0 pb-4'>
                    {movies?.map(movie => <MovieCard movie={movie} key={movie.id} />)}
                    {console.log(`El array de películas para la página es: MOVIES A CONTINUACION:`)}
                    {console.log(movies)}
                    {console.log(`el objeto principal que nos da esto es: MOVIESSEARCH A CONTINUACIÓN`)}
                    {console.log(moviesSearch)}
            </div>

        </div>
    )
}
