setTimeout(() => {
    alert("Hello World");
}, 2000);

setTimeout(() => {
    let container = document.querySelector("#container");
    let p = document.createElement("p");
    p.innerText = "Hello World";
    container.appendChild(p);
}, 2000);

let interval = setInterval(() => {
    let container = document.querySelector("#container");
    let p = document.createElement("p");
    p.innerText = "Hello World";
    container.appendChild(p);

    let paragraphs = container.getElementsByTagName("p");
    if (container.children.length === 5) {
        clearInterval(interval);
    }
}, 2000);

let clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    clearInterval(interval);
});