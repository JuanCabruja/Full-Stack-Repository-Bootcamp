import { Fragment } from "react";
import propTypes from "prop-types";

export default function FirstComponent(props) {

    console.log(props, typeof props);

    // console.log(props.title, typeof props.title);
    // console.log(props.date);

    const myFunction = function (bookID) {

        return (event) => console.log(bookID, event.target);

    }

    const mySimpleFunction = function (event) {
        //Process event
        console.log(event);
    }

    return (
        
            <Fragment>
                <h3>{props.title}</h3>
                <small>{props.date ? props.date : "No hay fecha"}</small>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ratione?</p>
                <button onClick={myFunction(1)}>Eliminar Book1</button>
                <button onClick={myFunction(2)}>Eliminar Book2</button>
                <button onClick={mySimpleFunction}>Eliminar Book2</button>
                <button onClick={()=> event => console.log(1, event)}>Toda la gestión Inline</button>
            </Fragment>
    );
};

// Utilizando Fragment abreviado

function SecondComponent() {
    return (
        <>
            <h1>Soy Otro Componente</h1>
        </>
    )
}

function ThirdComponent () {
    return (
        <div>
            <h2>Soy el tercer Componente</h2>
        </div>
    )
}

export {SecondComponent, ThirdComponent};

// export default function firstComponent(); // Alternativa
// Solo se puede tener un export default por archivo
// Pero podemos tener varios componentes en un solo archivo con la sintaxis de este archivo
// Podemos importar la etiqueta "Fragment" de "react" para englobar componentes sueltos ya que react
// por obligación solo puede exportar componentes con 1 etiqueta (independientemente de cuantas más esta tenga dentro)
// El fragment nos permite englobar sin tener que crear un DIV hasta exportar los componentes al DOM
// También puede hacerse dejando solo las etiquetas de apertura y de cierre <></> y de esta forma no hay que importar el Fragment
// 

// Nos permiten asignar valores por defecto a las propiedades
// Así como validar los tipos de datos que tienen cada factor
FirstComponent.defaultProps = {
    title: "Sin título",
    date: "Sin fecha",
    products: [],
  } 

FirstComponent.propTypes = {
    title: propTypes.string.isRequired,
    date: propTypes.string,
    products: propTypes.array,
}