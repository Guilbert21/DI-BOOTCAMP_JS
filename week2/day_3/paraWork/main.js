// exercise1
for (let x=0; x<=15; x++) {
    if (x === 0) {
            console.log(x +  " is even");
    }
    else if (x % 2 === 0) {
            console.log(x + " is even");   
    }
    else {
            console.log(x + " is odd");
    }
}

// exercise2
// let arr = ["new", "name", "need"]
// const newArr = []
// for (let item of arr) {
//   newArr.push(item.toUpperCase());
// }

// console.log(newArr)

let names= ["john", "sarah", 23, "Rudolf",34]

for (let i = 0; i < names.length; i++) {
    if (typeof names[i] === 'string') {
        let capitalized = '';
        for (let j = 0; j < names[i].length; j++) {
            if (j === 0) {
                capitalized += names[i][j].toUpperCase();
            } else {
                capitalized += names[i][j];
            }
        }
        names[i] = capitalized;
    }
}
console.log(names);
