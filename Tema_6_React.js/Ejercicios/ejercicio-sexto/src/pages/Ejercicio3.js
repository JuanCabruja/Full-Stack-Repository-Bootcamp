import { useState } from 'react';
import ContactList from '../components/ContactList';
import 'bootstrap/dist/css/bootstrap.css'
import Form from '../components/NewFormContact';

function Ejercicio3() {


  return (
    <div className="container">
      <h2 className="my-4">Agenda</h2>
      <ContactList  />
      <h2>Nuevo Contacto</h2>
      <Form />
    </div>
  );
}

export default Ejercicio3;
