// Prompt player 1 for a word
let word = prompt("Player 1, enter a word with a minimum of 8 letters:");

// Validate the word length
while (word.length < 8) {
    word = prompt("The word must have a minimum of 8 letters. Please enter a new word:");
}

// Initialize the hidden word with stars
let hiddenWord = "*".repeat(word.length);

// Initialize the number of incorrect guesses
let incorrectGuesses = 0;

// Initialize an array to store the guessed letters
let guessedLetters = [];

// Function to check if a letter is in the word
function isLetterInWord(letter) {
    return word.includes(letter);
}

// Function to update the hidden word with the correct guesses
function updateHiddenWord(letter) {
    let newHiddenWord = "";
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            newHiddenWord += letter;
        } else {
            newHiddenWord += hiddenWord[i];
        }
    }
    hiddenWord = newHiddenWord;
}

// Function to display the current state of the game
function displayGame() {
    console.log(`Hidden Word: ${hiddenWord}`);
    console.log(`Incorrect Guesses: ${incorrectGuesses}`);
    console.log(`Guessed Letters: ${guessedLetters.join(", ")}`);
}

// Main game loop
while (hiddenWord.includes("*") && incorrectGuesses < 10) {
    // Prompt player 2 for a letter
    let letter = prompt("Player 2, enter a letter:").toLowerCase();

    // Check if the letter has already been guessed
    if (guessedLetters.includes(letter)) {
        console.log("You have already guessed that letter. Please try again.");
        continue;
    }

    // Add the letter to the guessed letters array
    guessedLetters.push(letter);

    // Check if the letter is in the word
    if (isLetterInWord(letter)) {
        updateHiddenWord(letter);
    } else {
        incorrectGuesses++;
    }

    // Display the current state of the game
    displayGame();
}

// Check if player 2 won or lost
if (hiddenWord.includes("*")) {
    console.log("YOU LOSE");
} else {
    console.log("CONGRATS YOU WIN");
}
