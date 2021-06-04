import { useForm } from "../Hooks/useForm";
import { AuthContext, useAuthContext } from "../contexts/AuthContext"; 
import {useHistory} from "react-router-dom";
 
export default function Login() {

    const {logIn} = useAuthContext();

    const history = useHistory();
 
    const formInitialState = {email: "", password:""};
    const [form, handleChange] = useForm(formInitialState);
 
    const handleSubmit = async e => {
        e.preventDefault();

        // TODO: capturar credenciales y hacer POST al server
        const options = {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(form)
        }

        const response = await fetch("localhost:4000/login",);
        const data = await response.json();
        
        if (response.status === 200) {
            logIn(data.token, data.user);
            history.push("/dashboard")
        } else {
            alert("Credenciales incorrectas")
        }
    };
 

    return (
        <div className="d-flex justify-content-center pt-5">
            <form onSubmit={handleSubmit} className="form-group w-50 bg-dark p-5 rounded">
                <input type="email" className="form-control mb-3" placeholder="Introduce tu email" />
                <input type="password" className="form-control mb-3" placeholder="**********" />
                <input type="submit" value="Iniciar sesioó" className="btn btn-success" />
            </form>
        </div>
    )
}
