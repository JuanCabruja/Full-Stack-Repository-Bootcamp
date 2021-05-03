import react from 'react'
import { useState } from 'react';
import {useContext} from 'react';
import {GlobalContext} from '../Router';

export default function NewFormContact( ) {

    // const [Nombre, setNombre] = useState("");
    // const [Apellidos, setApellidos] = useState("");
    // const [Dirección, setDirección] = useState("");
    // const [Ciudad, setCiudad] = useState("");
    // const [cPostal, setCPostal] = useState("");
    // const [Teléfono, setTeléfono] = useState("");

    // function handleNombre (e) {
    //     setNombre(e.target.value);
    // };

    // function handleApellidos (e) {
    //     setApellidos(e.target.value);
    // };

    // function handleDirección (e) {
    //     setDirección(e.target.value);
    // };

    // function handleCiudad (e) {
    //     setCiudad(e.target.value);
    // };

    // function handleCPostal (e) {
    //     setCPostal(e.target.value);
    // };

    // function handleTeléfono (e) {
    //     setTeléfono(e.target.value);
    // };

    const {setContacts} = useContext(GlobalContext);

    function handleInput (e) {
        const inputName = e.target.id;
        const newValue = e.target.value;

        setForm({...form, ...{[inputName]: newValue}})

        console.log(e.target.id, e.target.value);
         
        

    };

    const initialState = {
        Nombre: "",
        Apellidos: "",
        Dirección: "",
        Ciudad: "",
        cPostal: "",
        Teléfono: "",
    };

    const [form, setForm] = useState(initialState);

    function submit (e) {
        e.preventDefault();
        
        let newContact = {
            Nombre: form.Nombre,
            Apellidos: form.Apellidos,
            Dirección: form.Dirección,
            Ciudad: form.Ciudad,
            cPostal: form.cPostal,
            Teléfono: form.Teléfono
        };

        // let newContact = {Nombre, Apellidos, Dirección, Ciudad, cPostal, Teléfono}

        // // setContacts([...contacts, newContact]); // Necesitaría recibir contacts para poder concatenar el nuevo array

        // // si setContacts se utiliza como una función, nos importa el contenido que ya tuviese la función. 

        setContacts(currentContacts => {
            return [...currentContacts, newContact]
        });

        setForm(initialState);
        // console.log(newContact);

        // // e.target.reset();  // El problema de utilizar este reset es que visualmente nos da la sensación de que se ha borrado
        // // Pero al no haber sido modificados a 0 se quedan con la anterior nomenclatura y hay que limpiarlos. 
        
        // setNombre("");
        // setApellidos("");
        // setDirección("");
        // setCiudad("");
        // setCPostal("");
        // setTeléfono("");
    };

    return (
        <form className="form-group" onSubmit={submit}>
            <input className="form-control mb-3" type="text" id="Nombre"      value={form.Nombre}     onChange={handleInput} placeholder="Introduce tu Nombre "/>
            <input className="form-control mb-3" type="text" id="Apellidos"   value={form.Apellidos}  onChange={handleInput} placeholder="Introduce tu apellido"/>
            <input className="form-control mb-3" type="text" id="Dirección"   value={form.Dirección}  onChange={handleInput} placeholder="Introduce dirección"/>
            <input className="form-control mb-3" type="text" id="Ciudad"      value={form.Ciudad}     onChange={handleInput} placeholder="Introduce Ciudad"/>
            <input className="form-control mb-3" type="text" id="cPostal"     value={form.cPostal}    onChange={handleInput} placeholder="Introduce código postal"/>
            <input className="form-control mb-3" type="text" id="Teléfono"    value={form.Teléfono}   onChange={handleInput} placeholder="Introduce número de teléfono"/>
            <input type="submit" className="btn btn-success" value="Registrar"/>
        </form>
    )
}
 