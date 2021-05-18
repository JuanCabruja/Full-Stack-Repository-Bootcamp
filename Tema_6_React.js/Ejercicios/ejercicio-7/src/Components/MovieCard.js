import React from 'react'
import {useHistory} from 'react-router-dom';
import Tippy from '@tippy.js/react';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale-subtle.css';

import './MovieCard.css';




export default function MovieCard({movie, key}) {


    const history = useHistory();

    const handleClick = e => {
        history.push(`/details/${e.target.id}`)
    }

    return (
       
            <Tippy interactive={true}  animateFill={true} delay={[100, 0]} placement={'right'} animation='scale-subtle' content={
                        <div className="container text-light">

                        <h2 className='card-title font-weight-bold ml-2 mb-0'>{movie.title} </h2>
                        <date className='mb-2 ml-2'>{movie.release_date}</date>

                        <p className="card-text justifyText m-2 ">{movie.overview}</p>


                        </div> 
            }>

                <div className='col-2 p-0 m-3 card border-0 cardBoxShadow img-hover-zoom'> 
                
                    <img className='rounded ' src={'https://image.tmdb.org/t/p/original/'+movie.poster_path} alt="" srcset="" onClick={handleClick} id={movie.id}/>
                    {/* <p className="d-block ">{movie.title}</p> */}


                    {/* <div className="container text-light float-right">

                        <h2 className='card-title'>{movie.title} </h2>
                        <date>Fecha: {movie.release_date}</date>

                        <p className="card-text">Descripción: {movie.overview}</p>

                        
                    </div> */}

                    {/* <button className="btn btn-outline-danger" onClick={handleClick} id={movie.id}>More Info</button> */}

                
                </div>
            </Tippy>
            
    )
}
