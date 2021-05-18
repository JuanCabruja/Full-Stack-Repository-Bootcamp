import React from 'react'
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

import {useContext} from 'react';
import {UpcomingContext} from '../Router';

import MovieCard from '../Components/MovieCard';

import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import './BaseDesign.css';

export default function MainPage() {

    const {movies, setMovies} = useContext(UpcomingContext);

  
   

    return (

        <div className='container-fluid background-color-base  my-10 '>
           {console.log(movies)}
           
            <div className="d-flex justify-content-center text-light pt-4 pb-0 font-weight-bold">
    
               <h1 className='font-weight-bold'>UPCOMING</h1>

            </div>

            <div className='row justify-content-around pt-0 pb-4'>
                    {movies.map(movie => <MovieCard movie={movie} key={movie.id} />)}
            </div>

        </div>
    )
}
