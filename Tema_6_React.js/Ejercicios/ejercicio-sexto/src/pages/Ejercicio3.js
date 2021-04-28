import { useState } from 'react';
import ContactList from '../components/ContactList';
import 'bootstrap/dist/css/bootstrap.css'
import Form from '../components/NewFormContact';

function Ejercicio3() {


    let initialContactState = [

        {Nombre: 'Juan', Apellidos: 'Simon', Dirección: 'Su Casa, 9', Ciudad: 'Alicante', cPostal: 33999, Teléfono: 857489},
        {Nombre: 'Elver', Apellidos: 'Larga', Dirección: 'Su Casa, 20', Ciudad: 'Madrid', cPostal: 35567, Teléfono: 938575},
        {Nombre: 'Mayte', Apellidos: 'Chacín', Dirección: 'Su Casa, 77', Ciudad: 'Granada', cPostal: 60587, Teléfono: 8573489}, 
    ]

    const [contacts, setContacts] = useState(initialContactState);

  return (
    <div className="container">
      <h2 className="my-4">Agenda</h2>
      <ContactList contacts={contacts} setContacts={setContacts} />
      <h2>Nuevo Contacto</h2>
      <Form setContacts={setContacts} />
    </div>
  );
}

export default Ejercicio3;
