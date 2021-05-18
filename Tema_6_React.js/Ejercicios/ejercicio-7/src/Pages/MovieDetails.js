import React from 'react'
import { useFetch } from '../Hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

import './BaseDesign.css';


export default function MovieDetails() {

    const [movie, setMovie] = useState({});
    const { movieId } = useParams();

    useFetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=377ddf2705edd281e4988690055ef69f`, setMovie);

    const genres = movie.genres;

    const [externalLinks, setExternalLinks] = useState({});

    useFetch(`https://api.themoviedb.org/3/movie/${movieId}/external_ids?api_key=377ddf2705edd281e4988690055ef69f`, setExternalLinks);

    return (
        <div className='background-color-base w-100'>

            <div className='row'>
                
                <div className="col-6 p-5 d-flex justify-content-center ">

                    <img className='img-fluid rounded vh-100 box-shadow' src={'https://image.tmdb.org/t/p/original/'+movie.poster_path} alt='Movie Background'/>   

                </div>

                <div className='col-6 text-light p-0'>

                    <div className="row">

                        <h1 className='display-1 text-left  my-5 col-12 font-weight-bold'>

                            {movie.title}

                        </h1>

                        <div className="col-12 d-flex justify-content-left mb-3">

                            <span className='mr-5'>Genre: </span>

                            {genres?.map(genre => {
                                return(
                                <span className='text-light mr-5'>{genre.name}</span>
                                    )
                            })}

                            <span className='ms-3 fs-6 badge bg-primary mr-5'>{movie.original_language}</span>
                            <span className='ms-3 fs-6 badge bg-primary'>{movie.vote_average}</span>

                        </div>

                        <div className="col-12">

                            <h2>{movie.tagline}</h2>

                           

    
                        </div>

                        <div className="col-12">

                            <h6 className='card-subtitle mb-2 text-muted'>{movie.release_date}</h6>

                        </div>

                        <div className="col-12 pr-5">
    
                            <p className='my-3'>{movie.overview}</p>

                        </div>


                        <div className="col-12">
                            <a className='ms-auto btn btn-warning' href={`https://www.imdb.com/title/${externalLinks?.imdb_id}/`}>IMDb</a>
                        </div>

                        {console.log(externalLinks)}
                    </div>
                </div>
            </div>
           
        </div>
    )
}
 