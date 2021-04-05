// Apartado 1 -- Define e inicializa un array con 5 elementos string en una sola línea. 

console.log("** Apartado 1 **");

let stringArray = ["Do", "Re", "Mi", "Fa", "Sol", "La", "Si"];
console.log(stringArray);

// Apartado 2 -- Define un array inicialmente vacío

console.log("** Apartado 2 **");

let numbersArray = [];
numbersArray.push(24 , 15, 45);

console.log(`Este array tiene una longitud de ${numbersArray.length} con el siguiente contenido ${numbersArray}`);

numbersArray.shift();
console.log(`Este array tiene una longitud de ${numbersArray.length} con el siguiente contenido ${numbersArray}`);

numbersArray.unshift(20, 16)
console.log(`Este array tiene una longitud de ${numbersArray.length} con el siguiente contenido ${numbersArray}`);


// Apartado 3 - Escribe una función nombrada que devuelva true si el argumando dado es de tipo boolean y false en caso contrario

console.log("** Apartado 3 **");

const booleanCheck = (argumento) => typeof argumento === "boolean" ? true: false;

console.log(booleanCheck(true));
console.log(booleanCheck("true"));
console.log(booleanCheck(3));

// Dos formas adicionales de abordar el mismo tema. 

function isBool(value) {
    return typeof value === "boolean";
}

console.log(isBool(true));
console.log(isBool("true"));
console.log(isBool(3));

function isBoolean (value) {
    if (typeof value === "boolean") {
    return true }
    else {
        return false
    }
}

console.log(isBoolean(true));
console.log(isBoolean("true"));
console.log(isBoolean(3));

// Apartado 4 - Escribe una función que devuelva la longitud de un String recibido por argumento. 

console.log("** Apartado 4 **");

const lengthString = (string) => string.length;

console.log(lengthString("HOLA MUNDO")); 

// Apartado 5 - Ceea una función de flecha que reciba una cantidad de minutos y los devuelva convertido en segundos. 

console.log("** Apartado 5 **");

const minToSeg = (value) => value * 60;

// De esta forma podemos hacerlo con una función nombrada

function minToSeg2 (value) {
    return value * 60;
}

console.log(minToSeg(10));

// Apartado 6 - Crea una función que reciba un número y devuelva el siguiente número par. (Si él es par lo devolverá directamente)

console.log("** Apartado 6 **");

function isEven (num) {
    if ( num % 2 == 0) {
        return num;
    } else {
        return num +1
    }
}

console.log(isEven(2), isEven(3));

// Apartado 7 - Crea una función que reciba una edad y devuelva la cantidad de días que has vivido
// obviar los años bisiestos
// Función que calcula los días 

console.log("** Apartado 7 **");

function yearToDays (años) {
    return años * 365
}

console.log(`Has vivido ${yearToDays(20)} días`);

// Apartado 8 -- CRea una función que reciba un array y devuelva su último elemento. Prueba diferentes longitud. 

console.log("** Apartado 8 **");

const returnLastElement = array => array[array.length-1];

console.log(returnLastElement(numbersArray));

// Apartado 9 -- Un granjero necesita contar la cantidad de patas de los animales en sus diferentes granjas muy frecuentemente
// pero tiene tres especies: pollos (2 patas), vacas (4 patas) y cerdos(4 patas). Tu función recibirá la cantidad de animales en ese orden
// y devolverá la cantidad de patas totales. Ejemplo countLegs (5, 2, 8); output: 50

console.log("** Apartado 9 **");

function legCounter (pollos, vacas, cerdos) {
    pollos = pollos * 2;
    vacas = vacas * 4;
    cerdos = cerdos * 4;
    return pollos + vacas + cerdos;
}

console.log(`La cantidad de patas totales de animales del granjero son: ${legCounter(2, 2, 2)}`);

// Apartado 10 -- Crea una funciónque determine si dos datos recibidos por argumentos son del mismo tipo. 

console.log("** Apartado 10 **");

function equalTypeController (variable1, variable2) {
    if (typeof variable1 === typeof variable2) {
        return true
    } else {
        return false
    }
}

console.log(equalTypeController(5, 9));
console.log(equalTypeController(5, "9"));
console.log(equalTypeController(5, true));

// Apartado 11 -- Crea una función que reciba un string con una frase y devuelva un array donde cada elemento será una palabra de la frase original. 
// Investigar método existente de los strings para este fin.

console.log("** Apartado 11 **");

function stringSplitter (string) {
    return string.split(" ");
}

console.log("apellido,nombre,dirección".split(","));

console.log(stringSplitter("Alfonsina y el mar"));

// Apartado 12 -- Inicializa dos objetos, addres1 y addres2 con las propiedades: provincia, ciudad, municipio, código postal, calle, 
// número, planta y número de puerta.

console.log("** Apartado 12 **");

var addres1 = {
    provincia: "Alicante",
    ciudad: "Alicante",
    municipio: "Alicante",
    códigoPostal: 03170,
    calle: "alguna",
    número: "123",
    planta: "primera",
    númeroDePuerta: 12
}

var addres2 = {
    provincia: "Alicante",
    ciudad: "Rojales",
    municipio: "Rojales",
    códigoPostal: 03170,
    calle: "alguna",
    número: "123",
    planta: "segunda",
    númeroDePuerta: 6
}

// Apartado 13 -- Los dominios en la web, se componen del nombre del dominio (codespaceacademy) y de un TLD (top-level domain) como, por ejemplo .com/.es.org, etc. 
// Crea una función que se llame parseDomain() que reciba por argumento un string y devuelva un objeto con dos propiedades: domain y tld. Ejemplo: 

console.log("** Apartado 13 **");

parseDomain("codespaceacademy.com"); 

function parseDomain (string) {
    let array = string.split(".");
    let object = {
        domain: array[0],
        tld: array[1]
    }
    return object;
}

console.log(parseDomain("codespaceacademy.com"));
console.log(parseDomain("google.es"));
console.log(parseDomain("blog.tk"));

//Otra forma de abordarl con una función de flecha. 

// const parsedomain2 = domainString => {domain: domainString.split(".")[0]} tld: domainString.split(".")[1]} Tiene un error.

// Apartado 14 Nos han prohibido el uso del operador de igualdad estricta (===), pero queremos poder
// seguir utilizando dicha funcionalidad. Crea una función que devuelva true si dos números
// tienen el mismo valor y el mismo tipo de dato. Debemos usar el operador Lógico "&&". Prueba tu función con estos dos inputs:

// strictEquality ("5", 5); // False
// strictEquality(5, 5); // True 

//Con función de flecha

console.log("** Apartado 14 **");

const strictEquality = (num1, num2) => (num1 == num2) && (typeof num1 == typeof num2); 

//Otra forma con función anónima normal. 

const strictEquality2 = function (a, b) {
    return (a == b) && (typeof a == typeof b)
}


console.log(strictEquality("5", 5));
console.log(strictEquality(5, 5,));

console.log(strictEquality2("5", 5));
console.log(strictEquality2(5, 5,));

console.log(strictEquality("5", 5));
console.log(strictEquality(5, 5,));


// Apartado 15 - crea una función que reciba dos strings y devuelva true si tienen la misma longitud y false en caso contrario. 

console.log("** Apartado 15 **");

const sameLength = (str1, str2) => str1.length === str2.length;
console.log(sameLength("Hola", "OOOO"));


// Apartado 16 - Crea una funciónque reciba un string y determina si el String está vacío sin utilizar la propuedad Length
console.log("** Apartado 16 **");

const isEmpty = function (str) {
    return str === " ";
}

console.log(isEmpty("Color"));
console.log(isEmpty(" ")); 

// Apartado 17 -- imprimir elemento a elemento el aray del apartado 1 de cuatro formas diferentes: 

console.log("** Apartado 17 **");    

console.log("While:");

let e = 0;
while (e < stringArray.length) {
    console.log(`Índex ${e}: ${stringArray[e]}`);
    e++;
}

console.log("For:");

for (let e =0; e<= stringArray.length-1; e++) {
    console.log(`Index: ${e}: ${stringArray[e]}`);
}

console.log("For Of:");
for (let value of stringArray) {
    value += 1;
    console.log(stringArray);
}

// Me falta el For Each

// Apartado 18 -- Crea una función que reciba un String y un Número N y devuelva el string original repetido N veces. 
console.log("** Apartado 18 **");

const repeatString = (string, n) => {
    let repeatString = " ";
}
repeatString("no haré memes sobre el profesor. ", 2)

// Apartado 19 Crea una función que recibe un objeto con dos campos, votos positivos y votos negativos y que devuelva la cuenta final. 
console.log("** Apartado 19 **");  

const getVoteCount = function (obj) {
    return obj.upVotes - obj.downVotes;
}

const votes = {upVotes: 35, downVotes: 15}

console.log(getVoteCount(votes));

// Apartado 20 -- Crea una función que recibe un array de tipos de datos mezclados y que devuelva otro array con el tipo de cada uno de los elementos.
console.log("** Apartado 20 **"); 


function typeOfArray(array) {
    const arrayTypes = [];
    array.forEach(element => {
        arrayTypes.push(typeof element)
    })

    return arrayTypes;
}

const testArray = ["I'm learning Js in a Bootcamp ", 7.5, 0, undefined, {}, [], "codespace"];
console.log(typeOfArray(testArray));

// Apartado 21 -- Función que dado un array de números con formato string devuelva un array con los números ya parseados. 
console.log("** Apartado 21 **"); 

function getParsedNumbers(array) {
    const parsedArray = [];

    array.forEach(element => {
        parsedArray.push(Number(element));
    })

    return parsedArray;
}

console.log(getParsedNumbers(["1.5", "10", "0"]));

// Apartado 22 -- Crea una función de flecha que devuelva "Positivo" si el número que recibe por argumento es mayor o igual que cero y "Negativo" en caso contrario.
// Usa el operador ternario.

console.log("** Apartado 22 **"); 

const isPositive = num => num >= 0 ? "Positive" : "Negative"

console.log(isPositive(1));
console.log(isPositive(0));
console.log(isPositive(-1));


// Apartado 23 -- Crea una función que dado un array cuaqluiera y un índice, borre el elemento guardado en ese índice. 

const removeItem = (array, index) => array.splice(index, 1)


// Apartado 24 -- Usando la función del apartado anterior, crea otra función que dado un array de números y un número
// a filtrar, devuelva un array borrando todos las participaciones de dicho número. 

const filterItem = (array, numberToFilter) => {
    array.forEach((element, index) => {

        if (element === numberToFilter) {
            removeItem(array, index);
        }
    })   
}

//Este no lo entiendo al completo, tengo que repasarlo. Está en los minutos finales de la clase del 05/04

let apartado24Array = [1, 5, 5, 7, 8, 3];
console.log(apartado24Array);
filterItem(apartado24Array, 5);
console.log(apartado24Array);