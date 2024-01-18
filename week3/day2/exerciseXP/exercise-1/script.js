let h1 = document.querySelector("h1");
console.log(h1.textContent);

let lastP = document.querySelector("p:last-child");
lastP.remove();

let h2 = document.querySelector("h2");
h2.addEventListener("click", function () {
    h2.style.backgroundColor = "red";
});

let h3 = document.querySelector("h3");
h3.addEventListener("click", function () {
    h3.style.display = "none";
});


let bold = document.querySelector(".Bold");
bold.addEventListener("click", function () {
    let paragraphs = document.querySelectorAll("article p");
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.fontWeight = "bold";
    }
});

h1.addEventListener("mouseover", function () {
    let randomsize = Math.floor(Math.random() * 100);
    h1.style.fontSize = randomsize + "px";
});

let paragraphs = document.querySelectorAll("article p");
let second = paragraphs[1];
console.log(second);

second.addEventListener("mouseover", function () {
    second.style.transition = "opacity 1s";
    second.style.opacity = "0";
});
