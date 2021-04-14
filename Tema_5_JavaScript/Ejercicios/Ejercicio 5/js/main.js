// Book Constructor
function Book(id, title, author, sales, price) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.sales = sales;
    this.price = price;
}

// Data initialization
let books = [
    new Book(1, "The Selfish Gene", "Richard Dawkins", 740120, 100),
    new Book(2, "The God Delusion", "Richard Dawkins", 610120, 74),
    new Book(3, "La nueva mente del emperador", "Roger Penrose", 120000, 30),
    new Book(4, "Sapiens: A Brief History of Humankind", " Yuval Noah Harari", 910120, 53),
    new Book(5, "The Selfish Gene", "Richard Dawkins", 740120, 82),
    new Book(6, "The God Delusion", "Richard Dawkins", 610120, 91),
    new Book(7, "La nueva mente del emperador", "Roger Penrose", 120000, 44),
    new Book(8, "Sapiens: A Brief History of Humankind", " Yuval Noah Harari", 910120, 21),
    new Book(9, "The Selfish Gene", "Richard Dawkins", 740120, 12),
    new Book(10, "The God Delusion", "Richard Dawkins", 610120, 15),
];

let displayedBooks = [...books];

// Selectors
const booksTbody = document.getElementById("books-body");
const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const salesInput = document.getElementById("salesInput");
const priceInput = document.getElementById("priceInput");
const addBookButton = document.getElementById("addBookButton");
const priceHeader = document.getElementById("priceHeader");

const filterInput = document.getElementById("filterInput");
const tfoot = document.querySelector("tfoot");


// Functionality

updateTable();

// Filter

filterInput.addEventListener("input", e => {
    //Versión 1 teniendo en cuenta las mayúsculas (case sensitive)
    displayedBooks = books.filter(book => book.title.includes(e.target.value));

    //Versión 2 Sin tener en cuenta las mayúsculas
    displayedBooks = books.filter(book => {
        return book.title.toUpperCase().includes(e.target.value.toUpperCase())
    })

    updateTable();
});

// Table Update

function updateTable() {
    // Vaciamos el tbody por completo
    booksTbody.innerHTML = "";
    
    // Generamos de nuevo todas las filas, utilizando ahora un array espejo. 
    displayedBooks.forEach(book => {
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
    });

    const totalPrice = displayedBooks.reduce((accumulator, book) => accumulator + book.price, 0 );
    tfoot.textContent = `Precio Total ${totalPrice}`;
}

// Remove Button

booksTbody.onclick = e => {
    if(e.target.tagName === "BUTTON") {
        books = books.filter(book => book.id != e.target.id);
        displayedBooks = displayedBooks.filter(book => book.id != e.target.id);
        updateTable();
    }
};

// Up and Down Oriented

let ascendingOrder = true;

priceHeader.style.cursor = "pointer";
priceHeader.addEventListener("click", e => {
    ascendingOrder = !ascendingOrder; 

    document.querySelector("span").innerHTML = ascendingOrder ? "&uarr;" : "&darr;"; 

    displayedBooks.sort((book, book2) => {
        if (ascendingOrder) { 
            return book.price - book2.price
        } else { 
        return book2.price - book.price } 
                          
        });

    updateTable();
})


// Process form and add a new book
addBookButton.addEventListener("click", e => {
    e.preventDefault();
    
    const newID = books[books.length-1].id + 1;

   const newBook = new Book(
            newID,
            titleInput.value,
            authorInput.value,
            salesInput.value,
            Number(priceInput.value));

   displayedBooks.push(newBook);
   books.push(newBook);
    updateTable();

    // titleInput.value = "";
    // authorInput.value = "";
    // salesInput.value = "";
    // priceInput.value = "";

    addBookButton.parentNode.reset();
});


// TFOOT 


