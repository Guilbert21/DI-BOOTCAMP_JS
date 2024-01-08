
const persons = require('./data');

function calculateAverageAge(persons) {
  const totalAge = persons.reduce((sum, person) => sum + person.age, 0);
  const averageAge = totalAge / persons.length;
  return averageAge;
}


const averageAge = calculateAverageAge(persons);

console.log(`Average Age: ${averageAge.toFixed(2)}`);
