// exercise 1
// Write some simple Javascript code that will join all the items in the array above, and console.log the result.

let sentence = ["my","favorite","color","is","blue"];
console.log(sentence.join(" "));


// exercise2


let str1 = "mix";
let str2 = "pod";

let nStr1 = str2.slice(0,2) + str1.slice(2);
let nStr2 = str1.slice(0,2) + str2.slice(2);

console.log(nStr1);
console.log(nStr2);

// exercise 3

let num1 = prompt("Enter a number:")
let num2 = prompt("Enter another number:")

let sum = Number(num1) + Number(num2);
alert(sum);


