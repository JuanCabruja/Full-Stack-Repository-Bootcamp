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


const divImg = document.getElementsByTagName("img")[0];

const listItems = document.getElementsByTagName("li");

let changeImage = event => divImg.src = event.target.textContent;

listItems[0].addEventListener ("click", changeImage);
listItems[1].addEventListener ("click", changeImage);
listItems[2].addEventListener ("click", changeImage);// v2 - Autoría Juan Alberto
const list = document.querySelector("ul");
const image = document.querySelector("img");


const changeImage = e => image.src = e.target.textContent;


list.addEventListener("click", changeImage);

// v2 - Autoría Juan Alberto
const list = document.querySelector("ul");
const image = document.querySelector("img");


const changeImage = e => image.src = e.target.textContent;


list.addEventListener("click", changeImage);