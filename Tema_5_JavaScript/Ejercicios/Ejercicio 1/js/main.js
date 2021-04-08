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


// Apartado 10 --  Incluir un botón que al pulsarlo genere un número aleatorio y mantenga en una lista
// actualiza el número de elementos que se han generado, los que son pares y los que son impares.

  const numGeneratorBtn = document.querySelector("#numGeneratorBtn");
  const evenOutput = document.querySelector(".evenOutput");
  const unevenOutput = document.querySelector(".unevenOutput");
  const counterOutput = document.querySelector(".counterOutput");
  let counter = 0;
  let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//   numGeneratorBtn.addEventListener("click", () => {
//       let x = lista.sort(function() {return Math.random() - 0.5})[0];
//             //   console.log(x);
//       if (x % 2 === 0) {
//         evenOutput.textContent = evenOutput.textContent.concat(` ${x}.`)
//       } else {
//         unevenOutput.textContent = unevenOutput.textContent.concat((` ${x}.`));
//       }
//   });

// He hecho el ejercicio de manera tal que se agrega en concatenado el valor, en clase 
// se llenó un span dispuesto justo después de la palabra, por eso este código es bastante
// Más largo.

    numGeneratorBtn.addEventListener("click", () => {
        let x = Math.floor(Math.random()*100);
    
        if (x % 2 === 0) {
            evenOutput.textContent = evenOutput.textContent.concat(` ${x}.`)
            counter++
            counterOutput.textContent = `Contador Total: ${counter}.`;
        } else {
            unevenOutput.textContent = unevenOutput.textContent.concat((` ${x}.`));
            counter++
            counterOutput.textContent = `Contador Total: ${counter}.`;

        }
    });


  // Apartado 11 -- Construir una lista que tenga números. Añadir un input donde poder añadir números y un botón.
  // Al pulsar el botón, si el número ya existe en la lista, mostrar un mensaje de error, si no existe, 
  // lo añadirá al principio.

  const numberTextInput = document.querySelector("#numberTextInput");
  const numberInputBtn = document.querySelector(".numberInputBtn");
  const listaEjercicio11 = document.getElementsByClassName("liEjercicio11");
  const ulApt11 = document.querySelector("#ulApt11");

  console.log(listaEjercicio11.length);
  console.log(listaEjercicio11.value);



    // function fillList ( {
    //     ulApt11.innerHTML = "";
    // })


  
//   numberInputBtn.addEventListener("click", () => {
//       for (let i = 0; i <= listaEjercicio11.length; i++) {
//           if (numberTextInput.value == listaEjercicio11.value[i]) 
//       }
//   })


// Método de María 

const ul_2 = document.getElementById("ul-2");
const input_4 = document.getElementById("input-4");
const button_11 = document.getElementById("button-6");
 
const myArray = [];
 
function addNumber() {
    const num = input_4.value;
    if (myArray.includes(num)) {
        alert("error");
    } else {
        const li = document.createElement("li");
        ul_2.prepend(li);
        li.textContent = num;
        myArray.push(num);
    }
}
 
button_11.addEventListener("click", addNumber);


// Apartado 12 -- Literalmente la forma en la que hice el apartado 2 con el Toggle. 



// Apartado Extra: Refactorizar Código. 

const buttons = document.getElementsByClassName('btnAptExtra');



// buttons[0].addEventListener('click', () => {

//     buttons[0].style.backgroundColor = "red";

// });



// buttons[1].addEventListener('click', () => {

//     buttons[1].style.backgroundColor = "red";

// });



// buttons[2].addEventListener('click', () => {

//     buttons[2].style.backgroundColor = "red";

// });

// Solución 1. 

// const buttonsArray = Array.from(buttons);

// buttonsArray.forEach(button => {
//     button.addEventListener("click", (e) => {

//         e.target.style.backgroundColor = "red";

//     })
// });

// Solución 2.
const buttons1 = document.querySelectorAll(".btnAptExtra");
buttons1.forEach(button => {
    button.addEventListener("click", (e) => {

        e.target.style.backgroundColor = "red";

    })
});