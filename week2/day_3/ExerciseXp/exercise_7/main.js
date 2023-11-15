const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
names.sort()
console.log(names);

// Console.log the name of their secret society. The output should be “ABJKPS”
const secretSociety = names.map((names) => names[0]).join('')
    
console.log(secretSociety) 
