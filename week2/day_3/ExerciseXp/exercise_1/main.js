// Write code to remove “Greg” from the people array.
const people = ["Greg", "Mary", "Devon", "James"];
 people.shift()
console.log(people);

// Write code to replace “James” to “Jason”.
people.splice(2, 2, "Jason")
console.log(people);

// Write code to add your name to the end of the people array.
people.push("Alexis")
console.log(people);

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
let pos = people.indexOf("Mary")
console.log(pos);

// Write code to make a copy of the people array using the slice method.
let people2 = people.slice(1)
console.log(people2)

// Write code that gives the index of “Foo”. Why does it return -1 ?
let foo = people2.indexOf("Foo")
console.log(foo); 
// because Foo is not in the array and it can output 0 because array start by 0

// Create a variable called last which value is the last element of the array.
let last = people2[people2.length - 1]
console.log(last);

// Using a loop, iterate through the people array and console.log each person.
for (let i = 0; i < people2.length; i++) {
    console.log(people2[i]);
}

// Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
for (let i = 0; i < people2.length; i++) {
    if (people2[i] === "Jason") {
        break;
    }
}
console.log(people2[i]);