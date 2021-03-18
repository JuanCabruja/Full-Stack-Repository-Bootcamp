// -------------------------- Uso de JS Externo ---------------------------//

console.log ("Dejo un ward")

function saludo () {
    alert("Hola desde un script externo");
    console.log("Has hecho click");
}
document.getElementsByTagName("a").item(2).addEventListener("click", saludo);

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

console.clear();
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
// ----- Objetos (Bloques)

let str = String("I'm a string");
let str2 = "I'm another string";
console.log(typeof str, typeof str2, typeof " ");

let num = Number(5);
let num2 = 5;
console.log(typeof num, typeof num2, typeof 5, typeof "5", typeof 1.3);
