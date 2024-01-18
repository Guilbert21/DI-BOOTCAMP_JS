const box = document.getElementById("box");
const target = document.getElementById("target");

let isDragging = false;

box.addEventListener("mousedown", function(event) {
    isDragging = true;
});

document.addEventListener("mousemove", function(event) {
    if (isDragging) {
        box.style.left = event.clientX - box.offsetWidth / 2 + "px";
        box.style.top = event.clientY - box.offsetHeight / 2 + "px";
    }
});

document.addEventListener("mouseup", function(event) {
    isDragging = false;
    if (isOverlapping(box, target)) {
        box.style.backgroundColor = "green";
    } else {
        box.style.backgroundColor = "red";
    }
});

function isOverlapping(element1, element2) {
    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();
    return !(
        rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom
    );
}
