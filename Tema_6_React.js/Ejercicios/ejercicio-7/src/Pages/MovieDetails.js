import React from 'react'
import { useFetch } from '../Hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useState } from 'react';


export default function MovieDetails() {

    const [movie, setMovie] = useState({});
    const { movieId } = useParams();

    useFetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=377ddf2705edd281e4988690055ef69f`, setMovie);

    return (
        <div>
            <div className='vh-100 d-block'>
                <img className='img-fluid w-100' src={'https://image.tmdb.org/t/p/original/'+movie.backdrop_path} alt='Movie Background'/>
                <div className='container px-5'>
                    <h1 className='display-1 text-center my-5'>
                        {movie.title}
                        <span className='ms-3 fs-6 badge bg-primary'>{movie.original_language}</span>
                        <span className='ms-3 fs-6 badge bg-primary'>{movie.vote_average}</span>
                    </h1>

                    <h2>{movie.tagline}</h2>
                    <h6 className='card-subtitle mb-2 text-muted'>{movie.release_date}</h6>
                    <p className='my-3'>{movie.overview}</p>
                    <a className='ms-auto btn btn-warning' href={``}>IMDb</a>
                </div>
            </div>
           
        </div>
    )
}
 