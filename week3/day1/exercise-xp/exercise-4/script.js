let allBooks = [
    {
        title : "Solo Leveling",
        author : "Chugong",
        image : "https://fr.web.img2.acsta.net/pictures/18/07/02/17/25/3643090.jpg",
        alreadyRead : true
    },
    {
        title : "Classroom of the Elite",
        author : "Shōgo Kinugasa",
        image : "https://fr.web.img2.acsta.net/pictures/18/07/02/17/25/3643090.jpg",
        alreadyRead : false
    }
];

function renderBooks() {
 let div = document.querySelector(".listBooks")
 let table = document.createElement("table")
 allBooks.forEach((book) => {
    let row = document.createElement("tr");
    let title = document.createElement("td");
    let author = document.createElement("td");

    title.textContent = book.title + " written by " + book.author;
    author.innerHTML = `<img src="${book.image}" width="100px">`;

    if (book.alreadyRead) {
        row.style.backgroundColor = "green";
    } else {
        row.style.backgroundColor = "red";
    }
    row.appendChild(title);
    row.appendChild(author);
    table.appendChild(row);

});

div.appendChild(table);
}

renderBooks();