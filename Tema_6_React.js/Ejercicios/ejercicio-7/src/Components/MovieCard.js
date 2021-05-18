import React from 'react'
import {useHistory} from 'react-router-dom';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';



export default function MovieCard({movie, key}) {


    const history = useHistory();

    const handleClick = e => {
        history.push(`/details/${e.target.id}`)
    }

    return (
        <div>
            <Tippy content={movie.title}>
                <div className='col-2'>
                
                    <img className='rounded' src={'https://image.tmdb.org/t/p/w154/'+movie.poster_path} alt="" srcset="" onClick={handleClick} id={movie.id}/>
                    <div><p>{movie.title}</p></div>


                    {/* <div className="container text-light float-right">

                        <h2 className='card-title'>{movie.title} </h2>
                        <date>Fecha: {movie.release_date}</date>

                        <p className="card-text">Descripción: {movie.overview}</p>

                        
                    </div> */}

                    {/* <button className="btn btn-outline-danger" onClick={handleClick} id={movie.id}>More Info</button> */}

                
                </div>
            </Tippy>
       

        </div>
    )
}
