// exercise1
5 >= 1
// true

0 === 1
// false

4 <= 1
// false

1 != 1
// false

"A" > "B"
// false

"B" < "C"
// true

"a" > "A"
// false

"b" < "A"
// false

true === false
// false

true != true
// false

// exercise2
const numbersString = prompt("Enter a string of numbers separated by commas:");
const numbersArray = numbersString.split(",");
let sum = 0;

for (let i = 0; i < numbersArray.length; i++) {
    sum += parseInt(numbersArray[i]);
}

console.log(sum);

// exercise3

let sentence = prompt("Enter a sentence contaning the word nemo:");
let nemoIndex = sentence.indexOf("nemo");

console.log("I found nemo at position"(nemoIndex))

// exercise4
let str = prompt("Enter a number:");

if (str < 2){
    console.log("boom");
} else {
    console.log("b" + "o".repeat(str) + "m");
}

