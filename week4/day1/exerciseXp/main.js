// ----Exercise1----//
// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}
// value a will be 3

// #1.1 - run in the console:
funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ? will get an error because with const we can't change the value of the variable


//#2
// let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}
//this code this block of code will alert 5 because the value of a is 5

// #3
function funcFour() {
    window.a = "hello";
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

funcFour()
//got undefined because the value of a is not defined

funcFive()
// it output 0 because its taking the value of a from the global scope


//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix()
// #4.2 What will happen if the variable is declared 
// it won't work error

// with const instead of let ?
// identical to the previous question

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared
// will get error

// with const instead of let ?
// err also because we can't change the value of a

// ----Exercise2---- //

// function winBattle(){
//     return true;
// }
// Transform the winBattle() function to an arrow function.
const winBattle = () => true;

// let experiencePoints = '';
let experiencePoints = winBattle() ? 10 : 1;

console.log(experiencePoints);

// ----Exercise3---- //

// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false
const isString = (str) => {
    if(typeof str === "string"){
        return true;
    } else {
        return false;
    }
}
console.log(isString("hello"));

// ----Exercise4---- //

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
for (let i = 0; i < colors.length; i++) {
    console.log(`${i + 1}# choice is ${colors[i]}.`);
}
// Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
if (colors.includes("Violet")) {
    console.log("Yeah");
}
else {
    console.log("No...");
}

// ----Exercise5---- //

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

for (let i = 0; i < colors.length; i++) {
    let ordinalSuffix = (i + 1) % 10 === 1 ? "st" : (i + 1) % 10 === 2 ? "nd" : (i + 1) % 10 === 3 ? "rd" : "th";
    console.log(`${i + 1}${ordinalSuffix} choice is ${colors[i]}.`);
}


// ----Exercise6---- //
/// Create a global variable called bankAmount which value is the amount of money currently in your account.
let bankAmount = 9999999999999999999999;

// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
const vat = 0.17;

// Create an array with all your monthly expenses - both positive and negative (money made and money spent).
const details = [200, -100, 146, 167, -2900]; // Convert strings to numbers

// Create a program that modifies the expenses (i.e., the expenditures) array such that each expense has an additional 17% VAT computed and stored.
const vatDetails = details.map((amount) => {
    return amount >= 0 ? amount * (1 + vat) : amount * (1 - vat);
});

// Display your current bankAccount standing at the end of the month.
const total = vatDetails.reduce((acc, amount) => {
    return acc + amount;
}, bankAmount); 

console.log(total);

