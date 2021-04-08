// -------------------------- Uso de JS Externo ---------------------------//

console.log ("Dejo un ward")

function saludo () {
    alert("Hola desde un script externo");
    console.log("Has hecho click");
}
// document.getElementsByTagName("a").item(2).addEventListener("click", saludo);

//---------------------------------- Depuración / Loggin -----------------
// alert("Mensaje");
console.log("Mensaje");

//---------------------------------------- Variables --------------------------
// var -> function scope
// let / const -> block scope

// function saludar() {
    // console.log("Inicial: ", contador); -> Está puesto a propósito para ver que el contador no está inicializado y nos daría error.

    // for (let contador = 0; contador < 3; contador++) {
    //     console.log(contador);
    // }
    // console.log("Final: ", contador) -> Este también da error porque está fuera del bloque del For que definimor con {}
// }

// saludar ();

// Con Var se evitarán los errores de falta de asignación porque var asigna el valor a todo lo que no existe todavía
// así ese valor todavía no exista, pero esta funciń es vieja y Let la sustituyó porque tiene alta posibilidad de generar problemas.
// Var trabaja con variables que existen pero que no tienen Valor, es decir No están definidas (undefined)

function saludarConVar (){
    var contador;

    console.log("Inicial: ", contador);

    for (var contador = 0; contador < 3; contador++) {
        console.log(contador);
    }

    console.log("Final: ", contador);
}

saludarConVar();


// Inicialización 

let day;
day = 5; 

let month = 10;
let hour, minute, second;

let array = [15, 20, 25]
console.log(array[0], array[1], array[2])

let [var1, var2, var3] = [15, 20, 25] // Avanzada
console.log(var1, var2, var3);

// Const -> Block Scope
const x = 1;
// x = 2; Error invalid assignment to const 'x'
// Porque la const es una 'variable' que no es variable y si se modifican sus datos se produce un error.


// -------------------------- Tipos de Datos -
// ------ Primitivos: string, number, boolean, undefined y null
// ----- Objetos (Bloques y cualquier cosa quee no sea un dato primitivo)

let str = String("I'm a string");
let str2 = "I'm another string";
console.log(typeof str, typeof str2, typeof " ");

let num = Number(5);
let num2 = 5;
console.log(typeof num, typeof num2, typeof 5, typeof "5", typeof 1.3);
// Javascript no diferencia entre números enteros y reales, en este lenguaje todos son num.

let bool = Boolean(true);
let bool2 = false;

console.log(typeof bool, typeof bool2, typeof true, typeof "true");

let undef;
console.log(undef, typeof undef);

let selectedColor = null; // Limpiar una variable
console.log(selectedColor, typeof selectedColor);

//Objects

array = Array(1, 2, 3);
const array2 = [1, 2, 3];
console.log(array, array2);
console.log(typeof array, typeof array2);

console.log(typeof new Date("2021-07-05"));
console.log(typeof new Error("Mensaje de Error"));



//------------------------- Strings ------------------------------

str = "Hola Futuro.";
console.log(str, str.length);
console.log(str.indexOf("Futuro"), str.indexOf("Cadena no presente"));
console.log("La última ocurrencia de 'u' está en el índice ", str.lastIndexOf("u"));

console.log(str.substring(1, 3));

console.log("Hola mundo".concat(". Adios Mundo."));
console.log("Hola mundo"+". Adios Mundo.");

str = str + "Adios Mundo.";
str += "Adios Mundo.";
console.log(str);
console.log(str.replaceAll("Mundo","Futuro"));

console.log(str.toLowerCase());
console.log(str.toUpperCase());

console.log(`el día de mi cumpleaños es ${day}.`); // String Template perteneciente a ES6 

//Parsing - Parseo

let number = Number("asdadsa"); // NaN 'Not a number' sale en lugar de un error si pones letras
console.log(number, typeof number);

number = Number("1000");
console.log(number, typeof number);

number += "1000"; // Entiende que es una concatenación de Strings no una suma de numeros.
console.log(number, typeof number);



//------------------------------------------------- Objects -----

let person = {
    name: "Jane",
    age: 30,
    blonde: false,

    // presentarse() {
    //     console.log(`Me llamo ${this.name}, tengo ${this.age} y soy ${this.blonde ? }`) - Me falta verlo y practicar
    // }
     
}



console.log(person);
console.log(`Se llama ${person.name} y tiene ${person.age} años.`);

person.name = "Jane";
console.log(person);
console.log(`Se llama ${person.name} y tiene ${person.age} años.`);


//-- Brackets Notation / Acceso por Corchetes --

let propertyName = "age";
console.log(person[propertyName]);

console.clear();
//-- Ampliación --

person.children = ["Martha", "Peter"];
console.log(person);
console.log(person.children[1]);

const kid = {
    name: "Carlos",
    height: 1.74,
    gender: "Masculino",
    friends: [],
    looseFriends () {
        this.friends.pop();

    }
}

console.log(kid);
kid.friends.push("Carmen", "Sarah", "Chris");
console.log(kid);
kid.friends.unshift("Marcus");
console.log(kid);
kid.looseFriends();
console.log(kid);


//This

//Object Constructor using functions

//La sintáxis de un constructor u objeto es prácticamente idéntica a la función normal. 
// se escribe tal cual una función entera, pero el nombre de la función empieza en maúscula
//

function Car(brand, color, weight, topSpeed) {
    this.brand = brand;
    this.color = color;
    this.weight = weight;
    this.topSpee = topSpeed;
    this.getDescription = function () {
        return `This ${this.color} ${this.brand} weights ${this.weight} and ` +
        ` can reach up to ${this.topSpeed}`
    }
}



let y = new Car("Mercedes", "red", "1500kg", "300 Km/h");

console.log(y);

function Car(brand, color, weight, topSpeed) {
    this.brand = brand;
    this.color = color;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.getDescription = function () {
        return `This ${this.color} ${this.brand} weights ${this.weight} and ` +
        ` can reach up to ${this.topSpeed} km/h`
    }
}

// pre ES5, esta es la forma en la que se trabajaban antes los objetos, ahora el Visual Code
// Nos sugiere convertirlo a una nueva clase, que es como suele hacerse en ECMAS15

const car1 = new Car("Mercedes", "red", 2000, 200);
const car2 = new Car("Volvo", "White", 2500, 180);
const car3 = new Car("volkswagen", "blue", 1500, 175);

console.log(car1.getDescription());
console.log(car2.getDescription());
console.log(car3.getDescription());


//--------------- Condicionales

const randomNumber = 9;
const guessedNumber = "5";

if (typeof randomNumber !== typeof guessedNumber) {
    console.log("¡Hey! Tienes que introducir el mismo tipo");
}


if (randomNumber === guessedNumber) {
    console.log("Has acertado el número.");
} else if (randomNumber>guessedNumber) {
    console.log("El número secreto es mayor.");

} else {
    console.log("El numero secreto es menor.");
}

console.clear();


// Ternary Operator: Tengo q verlo en la clase online
// Switch 

let option = 3;
switch (option) {
    case 1:
        // Contenido para case 1
        console.log("Option vale 1");
        break;
    case 2:
        // Contenido para case 1
        console.log("Option vale 2");
    break;
    case 3:
        // Contenido para case 1
        console.log("Option vale 3");
    break;
    case 4:
        // Contenido para case 1
        console.log("Option vale 4");
    break;
    default: // De Otro Modo PseInt
        console.log("Option vale otro");
}

// ------------------------- Funciones
// Nombradas

function greet (name, lastName) {
    console.log(`Hola ${name} ${lastName}, ¿que tal?`);
}

greet();
greet("Marco", "Aurelio");

function square(num) {
    return num*num;
}

console.log(square());
console.log(square(2));
console.log(square(5));

//Anonimas

let numbersArray = [5, 51, 1, 15, 2];
console.log(numbersArray);
numbersArray.sort(); //Ordena Según ASCII
console.log(numbersArray);




function orderNumbers (a, b){
    if (a < b) {
        return -1;
    }
    else if (a === b){
        return 0;
    } else {
        return 1;
    }
}

// const Person6 = {
//     name: " ",
//     age: 5,
// }

// const Person5 = {
//     name: " ",
//     age: 55,
// }

// const Person4 = {
//     name: " ",
//     age: 50,
// }




//Array sort orderNumbers
numbersArray.sort(orderNumbers);
console.log(numbersArray);

//

numbersArray.sort(function (a, b) {return a - b})
console.log(numbersArray);
numbersArray.sort(function (a, b) {return b - a})
console.log(numbersArray);

const perimeterOfSquare =  (side) => side*4;
console.log(perimeterOfSquare(5));

// Arrow Functions



// let perimeterOfSquare = function (side) { // Función anónima normal
//     return side * 4;
//     }
// perimeterOfSquare = function (side) {return side * 4;} // (opcional) Una única línea
// perimeterOfSquare = (side) => {return side * 4;} // Sustituyo function por la flecha después de params.
// perimeterOfSquare = (side) => side * 4; // Si sólo quiero devolver algo, quito llaves y return.
// perimeterOfSquare = side => side * 4; // Si sólo tiene 1 param, puedo quitar paréntesis.



console.log(perimeterOfSquare(5));

numbersArray.sort((a, b) => b.age - a.age);
console.log(numbersArray);


//----- For

for (let i = 0; i <= 10; i++) {
    console.log(i);
}



//--- While

//tengo que rellenar con ejemplos.


//----- forEach
//----- El forEach es un método exclusivo para Arrays.
console.log(numbersArray)

numbersArray.forEach(function(value, index) {
    console.log(`Índice ${index}: ${value}`);
});

console.log(`Índice`);


//---- For Of 

for (let item of numbersArray ) {
    console.log(item);
};

//---- Continue 
for (let i = 0; i < 5; i++){
    if (i === 3){
        continue; //salta a la siguiente iteración
    }
    console.log("Using conitnue", i);
}

//----- Break
let i = 0;
let k = 0;

mainLoop: while (true) {
    console.log("Outer loop", i);
    i++;
    k = 1;
    while (true) {
        console.log("Inner loop", k);
        k++;

        if (i === 5 && k === 5) {
            break mainLoop;
        } else if (k === 10) {
            break;
        }
        // break mainLoop; //rompe o para el bucle en el que esté
    }
}

console.clear();

//---- Document Object Model (DOM)

// Basics

console.log(document);
console.log(document.domain);
console.log(document.URL);
document.title = "Cheatsheet JavaScript (DOM)"; // o document.title += "DOM"; concatena el string DOM al anterior título
console.log(document.title);

console.clear();
// Selectors

const family = document.getElementsByTagName ("div");
console.log(family);

// console.log(Array.from(family).forEach(item => console.log(item))); /convierte el family HTML en un Array con ForEach

// for (let familyMember of family) {
//     console.log(family);
// }

const grandParent = document.getElementById("grandparent");
console.log(grandParent);

const parents = document.getElementsByClassName("parent");
const parent1 = parents[0];
const parent2 = parents[1];

console.log(parent1, parent2);

// function devuelvoArray () {
//     const arrayPrueba = [10, 20, 30, 40]
//     return arrayPrueba;
// } Inciso sobre el funcionamiento del getElementsByClassName
// devuelvoArray()

// let element = document.querySelector("")

//Falta ingresar dos primeras horas de las clases de hoy - Los Atributos.

//Acceso al elemento según propiedad específica y modificar.

document.querySelector("h1").id = "nuevoID";
parent1.setAttribute("placerholder", "introduce tu nombre");

//Acceso al DOM - Crear y Eliminar elementos - Creater & Remove Elements

let myDiv = document.createElement("div");
myDiv.id = "new-Div";
myDiv.classList.add("child"); //Con esta clase añadimos la clase child al div que creamos.
myDiv.textContent = "child 2.5"; //Agregamos texto al Div 

let myDiv2 = myDiv; //Como demostración, es un solo Nodo con dos nombres distintos. 

parent2.appendChild(myDiv2) //Hacemos que el padre ubique a myDiv como su hijo. Aunque lo asignemos aquí, al ir después en parent1 con su otro nombre, se irá del Parent2.
parent1.appendChild(myDiv); // MISMO nodo con dos nombres distintos. Agregas al final el Elemento. 

myDiv2 = myDiv.cloneNode(true); //Creamos un nuevo nodo a partir del original, es true para clonar todos los descendientes.
parent2.appendChild(myDiv2);
myDiv2.textContent = "Child 5";

// myDiv.remove(); //Elimina el elemento completo.

let myDiv3 = myDiv.cloneNode(true);
// parent2.insertBefore(myDiv3); // Se utiliza para insertar a nivel de HTML antes del Hijo x

parent2.before(myDiv3);

parent2.after(myDiv.cloneNode(true));

// Crear una función que me devuelva un nodo nuevo y que reciba etiqueta e ID

function nodeCreator(id, label) {
    let newNode = document.createElement(label);
    newNode.id = id;
    return newNode;
}
    
// Events

console.clear();
const colorButton = document.getElementsByTagName("button")[0];
colorButton.addEventListener("click", function (event){
    console.log(event)
    console.log(event.target);
// document.body.style.backgroundColor = "green";
    // document.body.classList.toggle("bg-red");
    console.log(event.target.tagName);

    if (event.shiftKey) {
        document.body.classList.toggle("bg-red");
    }
    console.log(`X: ${event.clientX} Y: ${event.clientY}`);
    console.log(`Àlt: ${event.altKey}. Shift: ${event.shiftKey}. Ctrl: ${event.ctrlKey}`);
});



// Ejemplo seleccionar un elemento Input del Html y cambiar el H
// Segun el evento, agregando una clase. 

const emailInput = document.querySelector("#emailInput");
emailInput.addEventListener("focus", inputListener);
emailInput.addEventListener("blur", inputListener);

function inputListener(e) {
    console.log("Tipo de evento: ", e.type);
    // e.target.style.border = "2px solid green";

    // if (e.type === "focus") {
    //     e.target.classList.add("bg-red");
    // } else if (e.type === "blur") {
    //         e.target.classList.remove("bg-red");
    //     }
}

const changeTitle = e => {
    // document.querySelectorAll("h1")[2].textContent ="asd";
    document.querySelectorAll("h1")[2].textContent = emailInput.value;

}

emailInput.addEventListener("keydown", inputListener);
emailInput.addEventListener("keyup", changeTitle);



const buttonContainer = document.getElementById("container");
buttonContainer.addEventListener("mouseover", inputListener);
buttonContainer.addEventListener("mouseout", inputListener);

function coords (e) {
    const h1 = document.querySelectorAll("h1")[3];
    h1.textContent = `X: ${e.clientX} Y: ${e.clientY}`;
}

document.body.addEventListener("mousemove", coords);


// Funciones de Alto Nivel // Higher Order Functions

// Aspectos Avanzados
// Funciones sort, map, filter

console.clear();
// -------------------  Map

// HAcer el map si no existiese.

let arr1 = [1, 2, 3];
let arr2 = [];

for (let num of arr1) {
    arr2.push (num * 2);
}

console.log(arr1, arr2);

//-- con Map
arr1 = [1, 2, 3];
arr2 = arr1.map(function (num) {
    return num * 2;
})

//-- o

arr2 = arr1.map(num => num * 2);

let arr3 = arr1.map(num => num % 2 === 0 ? num : num + 1);

console.log(arr1, arr2, arr3);

//A partir de un array con años de nacimiento calcular edades. 

const birthDate = [1995, 1990, 1985, 1980, 1975];
const userAge = birthDate.map( age => 2021 - age);
console.log(userAge);

// ------------------------ filter

// Nos permite filtrar los valores de un array, de forma bastante rápida y corta

//Sin filter sería así.

const prices = [150, 50, 49, 51, 15, 237];
const expensivePrices = [];

// for (let price of prices) {
//     if (price >= 50){
//         expensivePrices.push(price);
//     }
//  }

//  console.log(expensivePrices);

 // con Filter.

let expensivePrices2 = prices.filter( price => price>= 50);
console.log(prices, expensivePrices2);


// Con este ejemplo podemos ver lo fácil que es filtrar un array
// con el método filter

const cars = [
    {
        brand: "BMW",
        year: 1990,
        plateNumber: "HGJ1282"
    },
    {
        brand: "Mercedes",
        year: 2010,
        plateNumber: "BXG2282"
    },
    {
        brand: "Toyota",
        year: 2021,
        plateNumber: "JLY3382"
    }
]

//Aquí podemos ver como filtar tanto como map funcionan con booleanos
//Esto nos permite hacer combinaciones internas como por jeemplo
console.log(cars.filter(car => car.year > 2008 && car.brand.includes("T")));


//------------------- .sort
//Nos sirve para ordenar un array de números
//Sin sort, tendríamos que aplicar métodos de ordenación como el Método Burbuja

//Con la función .sort podemos ordenar la mayoría de arrays en una sola línea.


const arrsort1 = [10, 7, 20, 13];
console.log(arrsort1);

arrsort1.sort(function (num1, num2) {
    if (num1 > num2){
        return 1;
    } else if ( num1 < num2) {
        return -1;
    }
})

console.log(arrsort1);

// --------------- Reduce 
// Lo utilizamos para acumular un array

const arr = [16, 7, 13, 20];

console.log(arr.reduce((sum, currentNumber) => sum + currentNumber, 100));