
// Selectores & Variables

const ulId = document.querySelector("#ulId");
const divEjercicio2 = document.getElementById("divEjercicio2");

const URL1 = "https://jsonplaceholder.typicode.com/comments";
const URL2 = "https://jsonplaceholder.typicode.com/posts";

let promise = fetch(URL1);
let promise2 = fetch(URL2);

console.log(divEjercicio2);
console.log(1);
promise.then(response => console.log(response));


function printLi(array) {
    array.slice(0, 20).forEach(user => {
        
        let li = document.createElement("li");
        ulId.appendChild(li);
        li.textContent = user.id; 
        
        

    })
};

function printContent(array) {
    array.slice(0, 20).forEach(user => {
        
        let h2 = document.createElement("h2");
        divEjercicio2.appendChild(h2);
        h2.textContent = user.title; 

        let p = document.createElement("p");
        divEjercicio2.appendChild(p);
        p.textContent = user.body;
    
    })
}

console.log("*********");

fetch(URL1)
    .then(response => {
        if (!response.ok) {
            throw Error("Hay algún problema con la respuesta: " + response.statusText);
            
        }
        return response.json();
    })
    // Aquí proceso los datos.
    .then(data => {
        printLi(data);
        
    }).catch(error => {})
;

fetch(URL2)
    .then(response => {
        if (!response.ok) {
            throw Error("Hay algún problema con la respuesta: " + response.statusText);
            
        }
        return response.json();
    })
    // Aquí proceso los datos.
    .then(data => {
        printContent(data);
        
    }).catch(error => {})
;

// Nos sirve para el ejercicio, crear una función que se llame paginar
// Que dado un array, un número de página y un tamaño de página
// Y que lo que haga es que a partir de ese array darte los elementos
// que necesitamos, puede haber un problema de intentar hacer algo
// Cuando todavía no se tienen los datos.

// 