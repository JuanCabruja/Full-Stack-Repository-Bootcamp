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
    new Book(1, "The Selfish Gene", "Richard Dawkins", 740120, 12),
    new Book(2, "The God Delusion", "Richard Dawkins", 610120, 15),
    new Book(3, "La nueva mente del emperador", "Roger Penrose", 120000, 17),
    new Book(4, "Sapiens: A Brief History of Humankind", " Yuval Noah Harari", 910120, 16),
    new Book(5, "The Selfish Gene", "Richard Dawkins", 740120, 12),
    new Book(6, "The God Delusion", "Richard Dawkins", 610120, 15),
    new Book(7, "La nueva mente del emperador", "Roger Penrose", 120000, 17),
    new Book(8, "Sapiens: A Brief History of Humankind", " Yuval Noah Harari", 910120, 16),
    new Book(9, "The Selfish Gene", "Richard Dawkins", 740120, 12),
    new Book(10, "The God Delusion", "Richard Dawkins", 610120, 15),
];

// Selectors
const booksTbody = document.getElementById("books-body");

const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const salesInput = document.getElementById("salesInput");
const priceInput = document.getElementById("priceInput");
const addBookButton = document.getElementById("addBookButton");

function updateTable() {
    // Vaciamos el tbody por completo
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
    });
}

booksTbody.onclick = e => {
    if(e.target.tagName === "BUTTON") {
        books = books.filter(book => book.id != e.target.id);
        updateTable();
    }
};

updateTable();

function updateTableV2() {
    // Vaciamos el tbody por completo
    booksTbody.innerHTML = "";
    
    // Generamos de nuevo todas las filas
    books.forEach(book => {
        const newTr = document.createElement("tr");

        for (let property in book) {
            const newTd = document.createElement("td");
            newTd.textContent = book[property];
            newTr.appendChild(newTd);
        }
        
        const newRemoveButton = document.createElement("button");
        newRemoveButton.classList.add("btn", "btn-danger");
        newRemoveButton.id = book.id;
        newRemoveButton.textContent = "Remove";
        newRemoveButton.addEventListener("click", e => {
            books = books.filter(book => book.id != e.target.id);
            updateTable();
        });
        
        newTr.appendChild(newRemoveButton);

        booksTbody.appendChild(newTr);
    });
}

// updateTableV2();

// Process form and add a new book
addBookButton.addEventListener("click", e => {
    e.preventDefault();
    
    const newID = books[books.length-1].id + 1;

    books.push(new Book(
            newID,
            titleInput.value,
            authorInput.value,
            salesInput.value,
            priceInput.value)
    );

    updateTable();

    // titleInput.value = "";
    // authorInput.value = "";
    // salesInput.value = "";
    // priceInput.value = "";

    addBookButton.parentNode.reset();
});