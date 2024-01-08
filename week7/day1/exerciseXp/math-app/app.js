const _ = require('lodash');
const math = require('./math');

const resultAdd = math.add(5, 3);
const resultMultiply = math.multiply(4, 2);
const array = [1, 2, 3, 4, 5];

console.log(`Result of addition: ${resultAdd}`);
console.log(`Result of multiplication: ${resultMultiply}`);
console.log(`Sum of array elements: ${_.sum(array)}`);