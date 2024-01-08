const body = document.querySelector("body");
const colorBlocks = document.querySelectorAll("#sidebar > *");
const fillBlocks = document.querySelectorAll("#main > *");
const clearButton = document.querySelector("button");

clearButton.addEventListener("click", () => {
    fillBlocks.forEach(fillBlock => fillBlock.style.backgroundColor = "white");
});

body.addEventListener("mousedown", () => mousedown = true);
body.addEventListener("mouseup", () => mousedown = false);

colorBlocks.forEach(colorBlock => {
    colorBlock.addEventListener("click", event => color = event.target.style.backgroundColor);
});

fillBlocks.forEach(fillBlock => {
    fillBlock.addEventListener("mousemove", event => {
        if (mousedown && color) event.target.style.backgroundColor = color;
    });
});