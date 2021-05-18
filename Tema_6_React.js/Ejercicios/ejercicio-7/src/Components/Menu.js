import React from 'react'
import '../Pages/BaseDesign.css';
import logo from '../Images/Logo1.png';
import {createContext, useState, useEffect, useContext}  from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { UpcomingContext } from '../Router';



export default function Menu() {

    const history = useHistory();
    const {search, setSearch} = useContext(UpcomingContext);

    const handleClick = e => {
        history.push(`/`)
    }

    let searchValue = '';

    const handleSearch = e => {
        
        searchValue = e.target.value;
        console.log(search);
        console.log(searchValue);
            
    }

    const handleSubmit = e => {
        history.push(`/search/${searchValue}`)
        console.log(searchValue);
    }

   
    

    // const QUERY_SEARCH = 'https://api.themoviedb.org/3/search/movie?api_key=377ddf2705edd281e4988690055ef69f&language=en-US&query={AQUIVALAQUERY}&page=1&include_adult=false';


    // useEffect(() => {
    //   fetch(`https://api.themoviedb.org/3/search/movie?api_key=377ddf2705edd281e4988690055ef69f&language=en-US&query=${AQUI_VA_LA_QUERY}&page=1&include_adult=false`)
    //     .then(response => response.json())
    //     .then(data => setMovies(data.results));
    //   return () => {
    //   }
    // }, [])


    return (
        <div className='text-light d-flex justify-content-center '>
            
            <div className="input-group background-color-dark menuBoxShadow row">

                
                    {/* Me falta agregarle alguna animación al logo para dar la sensación del click y el que se sepa que es clickable */}
                    <img src={logo} alt="" className='col-2' onClick={handleClick}/>

                    <form className="form-outline my-1 p-4 col-10 d-flex align-content-center " onSubmit={handleSubmit}>

                        <input type="search" id="form1" className="form-control align-self-center" placeholder="Type the name of the film you're looking for ;)" onChange={handleSearch}  />
                        <label className="form-label" for="form1" type='submit'> </label>
                        {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit" >Search</button> */}
                        

                    </form>

                    

            </div>

        </div>
    )
}
