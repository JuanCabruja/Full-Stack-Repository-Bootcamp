import {Route, Redirect } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

export default function PrivateRoute({children, ...rest}) {

    const {isAuthenticated} = useAuthContext();

    return (    
        //con el Route render hacemos una función que haga que verifique el estado de autenticación
        <Route {...rest} render={() => {
            return isAuthenticated
            ? children
            : <Redirect to="/login" />
        }}/>
    )
}


// Esto podría servirnos pero tiene errores. Explicados en la clase.
// {isAuthenticated ? children : <Redirect />} 
