// exercise 1
function sumArrayElements(array) {
    return array.reduce(function (acc, current) {
        return acc + current;
    }, 0);
}

let numbers = [1, 2, 3, 4, 5];
console.log(sumArrayElements(numbers)); 

// exercise 2
function removeDuplicates(array) {
    return Array.from(new Set(array));
}

let arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(arrayWithDuplicates)); 

// exercise 3
function removeFalsyValues(array) {
    return array.filter(function (value) {
        return value !== null && value !== 0 && value !== "" && value !== false && value !== undefined && !isNaN(value);
    });
}

let sampleArray = [NaN, 0, 15, false, -22, '', undefined, 47, null];
console.log(removeFalsyValues(sampleArray)); 

// exercise 4
function repeat(str, n) {
    return str.repeat(n);
}

console.log(repeat('Ha!', 3)); 

// exercise 5
const startLine = '---------';
let turtle = '🐢';
let rabbit = '🐇';

console.log(startLine);
console.log(turtle);
console.log(rabbit);

turtle = turtle.trim().padEnd(9, '=');

console.log(startLine);
console.log(turtle);
console.log(rabbit);


