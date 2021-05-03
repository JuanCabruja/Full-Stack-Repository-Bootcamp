import React from 'react'
import {useParams} from 'react-router-dom';
import { useState, useEffect} from 'react';

    
export default function Record(props) {

    const [userData, setUserData] = useState({});
    const {user} = useParams(); //Devuelve un objeto con los parametros recibidos por URL
    // const user = params.userID;
    
    const USERS_URL = 'https://reqres.in/api/users/';

    useEffect(() => {
        fetch(`${USERS_URL}${user}`)
        .then(response => response.json())
        .then(data => setUserData(data))
    }, [user])

    return (
        <div>

            <h2>Record of {user}</h2>

            {/* Aquí nos genera un problema y es que intenta acceder al objeto ANTES de que llegue el Fetch y por tanto nos da error
            Lo que hacemos es agregar el Encadenamiento Opcional que nos da undefined hasta que llega el fetch */}
            <ul>
                <li>{userData.data?.email}</li>
                <li>{userData.data?.first_name}</li>
                <li>{userData.data?.last_name}</li>
                <img src={userData.data?.avatar} alt="Profile"></img>
            </ul>
        </div>
    )
}
