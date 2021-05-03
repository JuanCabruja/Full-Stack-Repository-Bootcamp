import React from 'react'
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

export default function MainPage({movies, IMAGE_LINK}) {

    const history = useHistory();

    const handleClick = e => {
        history.push(`/prueba`)
    }

    return (
        <div className='row'>
           {console.log(movies)}
            {
                movies.map(movie => {

                    return (

                        <>
                         
                        <div className='card col-sm-2'>

                            <img className='card-img-top' src={'https://image.tmdb.org/t/p/original/'+movie.poster_path} alt="" srcset="" />

                            <div className="card-body">

                                <h2 className='card-title'>{movie.title} </h2>

                                <p className="card-text">Descripción: {movie.overview}</p>

                                <date>Fecha: {movie.release_date}</date>
                                
                                <button className="btn btn-outline-danger" onClick={handleClick} id={movie.title}>More Info</button>
                            </div>

                        </div>
                        </>
                    )
                })
            }
        </div>
    )
}
