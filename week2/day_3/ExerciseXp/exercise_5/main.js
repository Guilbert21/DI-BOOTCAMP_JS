// Create an object called family with a few key value pairs.
let family = {
  name: 'John',
  color: 'blue'
};

// Using a for in loop, console.log the keys of the object.
for (let key in family) {
  console.log(key);
}

// Using a for in loop, console.log the values of the object.
for (let value in family) {
  console.log(family[value]);
}