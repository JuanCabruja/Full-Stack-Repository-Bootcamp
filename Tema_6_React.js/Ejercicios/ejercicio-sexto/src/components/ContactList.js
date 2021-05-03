import react from 'react'
import { useState } from 'react';
import {useContext} from 'react';
import {GlobalContext} from '../Router';

export default function ContactList() {

    const {contacts, setContacts} = useContext(GlobalContext);

    function erase (e) {
        
        const newList = contacts.filter( contact => e.target.id != contact.Teléfono)
        console.log(newList);
        setContacts(newList);

    }

    
    return (
        <div className="row">
    
        {contacts.map((contact, index) => {

            return  (
            
                <ul className="list-group mb-3 col-12 col-sm-6 col-xl-3" key={contact.Teléfono}>

                    <li className="list-group-item active">Contacto {index + 1} </li>
                    <li className="list-group-item">{contact.Nombre}</li>
                    <li className="list-group-item">{contact.Apellidos}</li>
                    <li className="list-group-item">{contact.Teléfono}</li>
                    <li className="list-group-item"><p>{contact.Dirección}, {contact.cPostal}, {contact.Ciudad}</p></li>
                    <button className="btn btn-outline-danger" onClick={erase} id={contact.Teléfono}>Eliminar</button>

                </ul>
                
        
            );    
        })}

        </div>
    )
};
