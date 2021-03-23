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

