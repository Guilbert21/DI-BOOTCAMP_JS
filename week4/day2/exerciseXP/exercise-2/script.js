
// Function declaration
function convertToGramsDeclaration(weightInKg) {
  return weightInKg * 1000;
}

// Invoke function declaration
console.log(convertToGramsDeclaration(2)); // Output: 2000

// Function expression
const convertToGramsExpression = function(weightInKg) {
  return weightInKg * 1000;
};

// Invoke function expression
console.log(convertToGramsExpression(2)); // Output: 2000

// Difference between function declaration and function expression:
// Function declaration is hoisted, meaning it can be called before it is defined in the code.
// Function expression is not hoisted and must be defined before it is called.

// Arrow function
const convertToGramsArrow = weightInKg => weightInKg * 1000;

// Invoke arrow function
console.log(convertToGramsArrow(2)); // Output: 2000
