// Ejercicio 2 - Trataremos un Array de Usuarios y una lista interactiva que cambie su disposición
// segun el usuario seleccionado, creamos una Función de Constructora.
// SESIÓN 42


// Book Constructor 
function Book(id, title, author, sales, price) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.sales = sales;
    this.price = price;   
};

//Data Initialization
let books = [
    new Book(1, "Libro 1", "A.1", 1000, 10),
    new Book(2, "Libro 2", "B.1", 2000, 11),
    new Book(3, "Libro 3", "C.1", 3000, 12),
    new Book(4, "Libro 4", "D.1", 4000, 13),
    new Book(5, "Libro 5", "E.1", 5000, 14),
    new Book(6, "Libro 6", "F.1", 6000, 15),
    new Book(7, "Libro 7", "G.1", 7000, 16),
    new Book(8, "Libro 8", "H.1", 8000, 17),
    new Book(9, "Libro 9", "I.1", 9000, 18),
    new Book(10, "Libro 10", "J.1", 10000, 18),
];

console.log(books);

// Selectors

const booksTbody = document.getElementById("books-body");
const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const salesInput = document.getElementById("salesInput");
const priceInput = document.getElementById("priceInput");
const addNewBookBtn = document.getElementById("addNewBookBtn");

// Funcionalidad 

function updateTable() {
    // Vaciamos el tbody por completo para cada renovación
    booksTbody.innerHTML = "";

    // Generamos de nuevo todas las filas
    books.forEach(book => {
        booksTbody.innerHTML += `
        <tr> 
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.sales}</td>
            <td>${book.price}</td>
            <td>
                <button class="btn btn-danger" id="${book.id}">Remove</button>
            </td>
        </tr>`;

        booksTbody.onclick = e => {
            if (e.target.tagName === "BUTTON") {
                console.log(e.target.id);
                books = books.filter( book => book.id != e.target.id);
                updateTable();
            }
        };
    });
}


updateTable();

// Process form and add new book

addNewBookBtn.addEventListener("click", e => {
    e.preventDefault();
    console.log(titleInput.value, authorInput.value,salesInput.value, priceInput.value );

    const newID = books[books.length-1].id + 1;

    books.push(new Book(newID, titleInput.value, authorInput.value, salesInput.value, priceInput.value));
    updateTable();

    // Vaciamos los Inputs después del push
    // titleInput.value = "";
    // authorInput.value = "";
    // salesInput.value = "";
    // priceInput.value = "";
    addNewBookBtn.parentNode.reset()[0];
});





























// Rellenamois la lista con la info de un usuario

// function fillList(user) {
//     list.innerHTML = "";

//     for (const propertyName in user) {
//         const value = user[propertyName];

//         if (typeof value !== 'function') {
//             const newListItem = document.createElement("li");
//             newListItem.innerHTML = `${propertyName}: ${value}`;
//             newListItem.classList.add("list-group-item");
//             list.appendChild(newListItem)
//         }

//     }
// }


