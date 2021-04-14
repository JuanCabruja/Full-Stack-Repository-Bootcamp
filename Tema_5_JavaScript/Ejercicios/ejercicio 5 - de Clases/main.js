class Book {
    constructor(id, title, author, sales, price) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.sales = sales;
        this.price = price;
    }
}

class Table {
    constructor(element, dataArray) {
        this.element = element;
        this.dataArray = dataArray;
        // Hacemos una copia del array para poder modificarlo sin afectar al original
        this.displayedArray = dataArray; 
        this.ascendingOrder = false;
        this.update();
    }

    createRow(object) {
        const cells = Object.values(object);

        const newRow = document.createElement("tr");
        for (const cell of cells) {
            const newCell = document.createElement("td");
            newCell.textContent = cell;
            newRow.appendChild(newCell);
        }

        this.element.appendChild(newRow);
    }

    update () {
        this.element.innerHTML = "";
        
        this.displayedArray.forEach(book => this.createRow(book));

        const totalPrice = this.displayedArray.reduce((p, c) => p + c.price, 0); // Previous (p), current (c)
        
        this.element.nextElementSibling.textContent = `Precio total: ${totalPrice}`;
    }

    filter (searchText) {
        // Opción 1: Si queremos que sea case sensitive, es decir, que sea una coincidencia exacta
        // teniendo en cuenta mayúsculas y minúsculas, la siguiente línea es suficiente.
        this.displayedArray = this.dataArray.filter(item => item.title.includes(searchText));

        // Opción 2: Si queremos que sea case INsensitive,
        // deberemos comparar todo en mayúsculas o en minúsculas:
        this.displayedArray = this.dataArray.filter(item => {
            return item.title.toUpperCase().includes(searchText.toUpperCase()); //includes devuelve boolean
        });

        // En cualquier caso, tras actualizar this.displayedArray, actualizamos la tabla.
        this.update();
    }

    sortByPrice () {
        this.displayedArray.sort((a, b) => {
            return this.ascendingOrder ? a.price - b.price : b.price - a.price;
        });
        this.update();
    }
}

const books = [
    new Book(1, "The Selfish Gene", "Richard Dawkins", 740120, 12),
    new Book(2, "The God Delusion", "Richard Dawkins", 610120, 15),
    new Book(3, "La nueva mente del emperador", "Roger Penrose", 120000, 17),
    new Book(4, "Sapiens: A Brief History of Humankind", " Yuval Noah Harari", 910120, 16),
    new Book(5, "Eloquent JavaScript, Second Edition", "Marijn Haverbeke", 12312, 25),
    new Book(6, "Learning JavaScript Design Patterns", "Addy Osmani", 12319, 17),
    new Book(7, "Speaking JavaScript", "Axel Rauschmayer", 12319, 11),
    new Book(8, "Programming JavaScript Applications", "Eric Elliott", 12319, 10),
    new Book(9, "Understanding ECMAScript 6", "Nicholas C. Zakas", 12319, 7),
    new Book(10, "You Don't Know JS", "Kyle Simpson", 12319, 9),
    new Book(11, "Git Pocket Guide", "Richard E. Silverman", 12319, 29),
    new Book(12, "Designing Evolvable Web APIs with ASP.NET", "Glenn Block, et al.", 12319, 19),
]

const table = new Table(document.querySelector("tbody"), books);
document.querySelector("#searchInput").addEventListener("input", e => table.filter(e.target.value));
const priceHeader = document.querySelector("thead th:last-child");

priceHeader.style.cursor = "pointer";
priceHeader.addEventListener("click", () => {
    table.ascendingOrder = !table.ascendingOrder;
    // Usamos los HTML Symbols para alternar una flecha hacia arriba / abajo.
    priceHeader.querySelector("span").innerHTML = table.ascendingOrder ? "&uarr;" : "&darr;"
    table.sortByPrice();
});