// Part I
function makeJuice(size) {
    function addIngredients(firstIngredient, secondIngredient, thirdIngredient) {
        // Display sentence on the DOM
        const sentence = `The client wants a ${size} juice, containing ${firstIngredient}, ${secondIngredient}, ${thirdIngredient}`;
        const sentenceElement = document.createElement('p');
        sentenceElement.textContent = sentence;
        document.body.appendChild(sentenceElement);
    }

    // Invoke addIngredients once
    addIngredients('apple', 'orange', 'carrot');
}

// Invoke makeJuice in the global scope
makeJuice('small');

// Part II
function makeJuice(size) {
    // Create an empty array named ingredients
    let ingredients = [];

    function addIngredients(firstIngredient, secondIngredient, thirdIngredient) {
        // Push ingredients into the array
        ingredients.push(firstIngredient, secondIngredient, thirdIngredient);
    }

    function displayJuice() {
        // Display sentence on the DOM
        const sentence = `The client wants a ${size} juice, containing ${ingredients.join(', ')}`;
        const sentenceElement = document.createElement('p');
        sentenceElement.textContent = sentence;
        document.body.appendChild(sentenceElement);
    }

    // Invoke addIngredients twice
    addIngredients('apple', 'orange', 'carrot');
    addIngredients('spinach', 'kale', 'ginger');

    // Invoke displayJuice once
    displayJuice();
}

// Invoke makeJuice in the global scope
makeJuice('large');
