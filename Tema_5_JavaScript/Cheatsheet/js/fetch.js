const URL = "https://jsonplaceholder.typicode.com/users";

let promise = fetch(URL);


console.log(1);
promise.then(response => console.log(response));


function printNames(array) {
    array.forEach(user => console.log(user.name))
};

const printCities = array => array.forEach(user => console.log(user.address.city));
const printLats = array => array.forEach(user => console.log(user.address.geo.lat));


fetch(URL)
    .then(response => {
        if (!response.ok) {
            throw Error("Hay algún problema con la respuesta: " + response.statusText);
            
        }
        return response.json();
    })
    // Aquí proceso los datos.
    .then(data => {
        printNames(data);
        printCities(data);
        printLats(data);
        
    }).catch(error => {})
;

console.log(2);


// Async - / await - Alternativa a then 

// La palabra Async avisa a javascript de que esa función bloquea el código. 

async function requestURL(URL) {

    console.log(1.1);
    const response = await fetch(URL); // La palabra await nos bloquea este código en ese momento para que no avance hasta que no se resuelva.
    const data = await response.json();
    console.log(data);
    console.log(1.2);
}

console.log(1);
requestURL(URL);
console.log(2);


// Petición con método HTTP POST en lugar de GET - Enviar Información al Servidor 
//

const POST_URL = "https://jsonplaceholder.typicode.com/posts";
const newPost = {
    title: "mi titulo",
    body: "mi cuerpo de publicación"
}
const http = {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(newPost)
};

fetch(POST_URL, http)
    .then(response => response.json())
    .then(data => console.log(data))

