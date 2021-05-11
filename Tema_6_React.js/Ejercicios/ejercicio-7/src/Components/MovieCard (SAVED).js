import React from 'react'
import {useHistory} from 'react-router-dom';

export default function MovieCard({movie, key}) {


    const history = useHistory();

    const handleClick = e => {
        history.push(`/details/${e.target.id}`)
    }

    return (
        <div>
            <div className='d-flex m-3 bg-gradient-light bg-gradient-dark'>
        
                <img className='rounded d-block' src={'https://image.tmdb.org/t/p/w154/'+movie.poster_path} alt="" srcset="" />

                <div className="container text-light float-right">

                    <h2 className='card-title'>{movie.title} </h2>
                    <date>Fecha: {movie.release_date}</date>

                    <p className="card-text">Descripción: {movie.overview}</p>

                    
                </div>

                <button className="btn btn-outline-danger" onClick={handleClick} id={movie.id}>More Info</button>
       
            </div>
        </div>
    )
}
