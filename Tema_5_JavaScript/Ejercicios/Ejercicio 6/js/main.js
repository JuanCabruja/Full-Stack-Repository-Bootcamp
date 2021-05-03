

// ----------------- Constantes
const URL = "https://jsonplaceholder.typicode.com/posts";
const pageSize = 20;
let pageNumber = 2;

let promise = fetch(URL);
promise.then(response => console.log(response));

// ----------------- Selectors

const postDiv = document.querySelector("#posts");
document.querySelectorAll(".previousPage").forEach(button => button.addEventListener("click", changePage));
document.querySelectorAll(".nextPage").forEach(button => button.addEventListener("click", changePage));

console.log(postDiv);
// console.log(previousPageButton);

// ----------------- Functionality

function changePage (event) {
    if (event.target.className === "previousPage" && pageNumber > 1) {
        pageNumber--;
    } else if (event.target.className === "nextPage" && pageNumber < posts.length / pageSize){
        pageNumber++;
    }
    printContent();
}

function printContent() {
    const newPagePosts = paginate(posts, pageSize, pageNumber)
    postDiv.innerHTML = "";
    return newPagePosts.forEach(post => {

        let h2 = document.createElement("h2");
        postDiv.appendChild(h2);
        h2.textContent = post.title;

        let p = document.createElement("p");
        postDiv.appendChild(p);
        p.textContent = post.body;

    })
}

function paginate(array, page_size, page_number) {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    // fuente: https://stackoverflow.com/questions/42761068/paginate-javascript-array
    return array.slice((page_number - 1) * page_size, page_number * page_size);
}



// ----------------- Fetch

fetch(URL)
    .then(response => {
        if (!response.ok) {
            throw Error("Hay algún problema con la respuesta: " + response.statusText);

        }
        return response.json();
    })
    // Aquí proceso los datos.
    .then(data => {
        posts = [...data];
        printContent(data, pageSize, pageNumber);

    }).catch(error => { })
    ;


