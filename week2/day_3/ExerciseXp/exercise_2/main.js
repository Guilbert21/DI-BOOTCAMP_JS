// Create an array called colors where the value is a list of your five favorite colors.
const color = ["black", "blue", "grey", "purple", "white"]

// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
for (let i = 0; i < color.length; i++) {
    console.log(`My #${i + 1} choice is ${color[i]}`)
}

// Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
for (let i = 0; i < color.length; i++) {
    if (i === 0) {
        console.log(`My ${i + 1}st choice is ${color[i]}`)
    } else if (i === 1) {
        console.log(`My ${i + 1}nd choice is ${color[i]}`)
    } else if (i === 2) {
        console.log(`My ${i + 1}rd choice is ${color[i]}`)
    } else {
        console.log(`My ${i + 1}th choice is ${color[i]}`)
    }
}