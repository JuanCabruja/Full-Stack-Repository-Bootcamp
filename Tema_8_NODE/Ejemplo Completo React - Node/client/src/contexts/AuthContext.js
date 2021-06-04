import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext({});

// Desestructuramos el objeto de pops porque solo queremos children

export default function AuthContextProvider({children}) {

    // TODO: Crear estado para la info del usuario

    // Crearemos una función que nos permitirá delegar la gestión
    // de la autenticación a este contexto. localstorage.setItem(token, )

    const [loggedInUser, setLoggedInUser] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const getToken = () => localStorage.getItem("TOKEN_KEY");
    const removeToken = () => localStorage.removeItem("TOKEN_KEY");
    const setToken = token => {
        localStorage.setItem("TOKEN_KEY", token)
        console.log(token)
    }

    const logIn = (token, user) => {
        // TODO: guardar el token
        // TODO: actualice el estado loggedInUser
        // TODO: actualice el estado isAuthenticaded (Booleano)
        setToken(token);
        setLoggedInUser(user);
        setIsAuthenticated(true);

    }

    const logOut = () => {
        removeToken();
        setLoggedInUser({});
        setIsAuthenticated(false);
    };

    useEffect(() => {
        const token = getToken();
        token && logIn(token, user)    
    }, []);

    const contextValue = {
       logIn,
       logOut,
       isAuthenticated,
    };

    return (
       <AuthContext.Provider value={contextValue} >
           {children}
       </AuthContext.Provider>
    )
}

// Custom hook para simplificar el uso de este contexto

const useAuthContext = () => useContext(AuthContext);

export {
    useAuthContext
}

// a la hora de importar en el Login podremos utilizar el useAuthContext para simplificar
// Los import, al usar useAuthContext utilizamos todo el contexto de AuthContext