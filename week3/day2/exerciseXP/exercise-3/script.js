// Declare a global variable named allBoldItems
let allBoldItems;

// Create a function called getBoldItems()
function getBoldItems() {
    allBoldItems = document.querySelectorAll("p strong");
}

// Create a function called highlight() that changes the color of all the bold text to blue
function highlight() {
    if (allBoldItems) {
        allBoldItems.forEach(item => {
            item.style.color = "blue";
        });
    }
}

// Create a function called returnItemsToDefault() that changes the color of all the bold text back to black
function returnItemsToDefault() {
    if (allBoldItems) {
        allBoldItems.forEach(item => {
            item.style.color = "black";
        });
    }
}

// Call the function getBoldItems() to collect all the bold items
getBoldItems();

// Call the function highlight() on mouseover and returnItemsToDefault() on mouseout
let paragraph = document.querySelector("p");
paragraph.addEventListener("mouseover", highlight);
paragraph.addEventListener("mouseout", returnItemsToDefault);
