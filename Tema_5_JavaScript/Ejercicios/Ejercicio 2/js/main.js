// Ejercicio 2 - Trataremos un Array de Usuarios y una lista interactiva que cambie su disposición
// segun el usuario seleccionado, creamos una Función de Constructora.

// Constructor
function User(name, firstLastName, secondLastName, email, age, city, nProducts) {
    this.name = name;
    this.firstLastName = firstLastName;
    this.secondLastName = secondLastName;
    this.email = email;
    this.age =  age,
    this.city = city;
    this.nProducts = nProducts;
    this.augmentProducts= function () {
        return this.nProducts++
    }
    this.emptyProducts= function () {
        this.nProducts = 0;
    }
}

//Data
const users = [
    new User('Fran', 'Gómez', 'Fernández', 'fgomez@gmail.com', 35, 'Málaga', 0),
    new User('Carla', 'Morrison', 'Guzmán', 'cmorrison@gmail.com', 30, 'Madrid', 5 ),
    new User('Andrés', 'Palacios', 'Blancos', 'apalaciosblanco@gmail.com', 40, 'Alicante', 30),
];

console.log(users);

// Selectors

const select = document.querySelector("#userSelect");
const list = document.querySelector("#userInfo");
const incrementBtn = document.querySelector("#incrementBtn");
const emptyButton = document.querySelector("#emptyButton");

// Funcionalidad 

users.forEach((user) => { 

    const option = document.createElement("option");
    option.setAttribute("value", user.email);
    option.textContent = user.name;
    select.appendChild(option);
  
})

// const parentDiv = document.getElementsByTagName("div")[0];

// const p = document.createElement("p");
// const p2 = p.cloneNode()

// p.textContent = "Párrafo del Ejercicio 1 - 1";
// p2.textContent = "Párrafo del Ejercicio 1 - 2";

// console.log(parentDiv);
// console.log(p);
// console.log(p2);

// parentDiv.appendChild(p);
// parentDiv.appendChild(p2);


//object.keys, object.values si iteramos para cada usuario y de cada usuario
// sabemos sus propiedades es posible saber cada List Item que creemos añadirle
// tanto el nombre de la propiedad como su valor. (keys: values)