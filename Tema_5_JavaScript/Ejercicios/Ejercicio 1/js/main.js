// Apartado 1 - Partimos de un HTML con un div vacío. 
// Con Jose, añadir dos elementos p con un texto dentro 

//He usado cloneNode() en lugar de crear dos P, también era una opción. 

const parentDiv = document.getElementsByTagName("div")[0];

const p = document.createElement("p");
const p2 = p.cloneNode()

p.textContent = "Párrafo del Ejercicio 1 - 1";
p2.textContent = "Párrafo del Ejercicio 1 - 2";

console.log(parentDiv);
console.log(p);
console.log(p2);

parentDiv.appendChild(p);
parentDiv.appendChild(p2);

// Apartado 2 - A través de un Botón, cambiar el color de fondo del HTML.


const colorButton = document.getElementsByTagName("button")[0];
colorButton.addEventListener("click", function (event){
    document.body.classList.toggle("bg-green");
});


// Apartado 3 - Con 3 URL en el HTMl cada vez que se haga click en 1 se vea.


// const divImg = document.getElementsByTagName("img")[0];

// const listItems = document.getElementsByTagName("li");

// let changeImage = event => divImg.src = event.target.textContent;

// listItems[0].addEventListener ("click", changeImage);
// listItems[1].addEventListener ("click", changeImage);
// listItems[2].addEventListener ("click", changeImage);// v2 - Autoría Juan Alberto
// const list = document.querySelector("ul");
// const image = document.querySelector("img");


// const changeImage = e => image.src = e.target.textContent;


// list.addEventListener("click", changeImage);

// v2 - Autoría Juan Alberto
const list = document.querySelector("ul");
const image = document.querySelector("img");


const changeImage = e => image.src = e.target.textContent;


list.addEventListener("click", changeImage);

// Apartado 4 -- Añadir un input de tipo texto y un botón. 
// Al pulsar el botón debe escribirse el texto del input en un párrafo. 4.2 
// Añadir un nuevo input pero esta vez cambiará el texto con cada pulsación de tecla del usuario.

const ap4Paragraph = document.getElementById("fillableParagraph");
const ap4Input = document.querySelector("input");
const ap4Button = document.querySelectorAll("button")[1];

ap4Button.addEventListener("click", () => {
    ap4Paragraph.textContent = ap4Input.value;
    ap4Input.value = "";
})

// 4.2 Añadir un nuevo input pero esta vez cambiará el texto con cada pulsación de tecla del usuario.

const ap42Paragraph = document.getElementById("fillableParagraph2");
const ap42Input = document.querySelectorAll("input")[1];

ap42Input.addEventListener("input", () => {
    ap42Paragraph.textContent = ap42Input.value;
})

// Apartado 5 -- De forma similar al anterior, pero para un textarea y validará si lo introducido es mayor de 15 caracteres


const textarea = document.getElementById("textAreaToValidate");
textarea.addEventListener("input", e => {
    if (e.target.value.length < 15 ) {
        e.target.style.backgroundColor = "red";
    } else {
        e.target.style.backgroundColor = "green";
    }
})

// Apartado 6 -- Añadir un input de tipo texto con leyenda: “Escribir un número par”. 
// Añadir un botón. Al pulsar el botón nos validará si el número es par o no. 
// En caso negativo, cambiar los bordes del input a rojo.
// Para revertir el estado de una propiedad, podemos utilizar el valor “revert” o dejarla vacío.

// tanto el label como el Input tienen el mismo Id por tanto se consideran Hermanos y tenemos que
// Seleccionarlo con un comando especifico. 

const evenInput = document.querySelector("#evenNumberInput");
evenInput.nextElementSibling.addEventListener("click", () => {
    if (evenInput.value % 2 == 0) {
        evenInput.style.border = "2px solid green"
    } else {
        evenInput.style.border = "2px solid red"
    }
})

// Apartado 7 -- Partiendo de una lista ul, crear 10 li con un texto indicando el número del elemento
// (“Elemento X”) usando un bucle for.

const mainUl = document.querySelector(".mainUl");

for (let i = 1; i <= 10; i++) {
    const newLi = document.createElement("li");
    newLi.textContent = `Elemento: ${i}`; 
    mainUl.appendChild(newLi);
};


// Apartado 8 -- Crea un enlace y un botón. Si pulso el enlace se me abre la URL en la misma página. 
// Si pulso primero el botón y luego el enlace, se me abre en una nueva pestaña.

const linkArea = document.querySelector("#linkArea");
const linkButton = document.querySelector("#linkButton")

linkButton.addEventListener("click", () => {
linkArea.toggle(target = "_blank");
})

// Apartado 9 -- Añadir un párrafo y un select con 5 opciones de colores: negro, blanco, rojo, amarillo, 
// verde y azul. Al seleccionar un color del select, cambiar el color del párrafo.

const selectChoicer = document.querySelector("#colorSenderSelect");   
const colorReceiverParagraph = document.querySelector("#colorReceiverParagraph"); 

selectChoicer.addEventListener("change", e => {
    colorReceiverParagraph.style.color = e.target.value;
})
