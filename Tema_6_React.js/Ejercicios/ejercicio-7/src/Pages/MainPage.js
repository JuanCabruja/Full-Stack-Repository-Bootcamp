import React from 'react'
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

import {useContext} from 'react';
import {GlobalContext} from '../Router';

import MovieCard from '../Components/MovieCard';

import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';

export default function MainPage() {

    const {movies, setMovies} = useContext(GlobalContext);
   

    return (

        <div className='container'>
           {console.log(movies)}

            <div className='row'>
                    {movies.map(movie => <MovieCard movie={movie} key={movie.id} />)}
            </div>

        </div>
    )
}
