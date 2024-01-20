// exercise 1

// let language = prompt("which language do you speak?")
// language = parseInt(language);

// let languageLow = language.toLowerCase();

// switch (languageLow) {
//     case "french":
//         console.log("Bonjour");
//         break;
//     case "english":
//     console.log("Hello");
//         break;
//     case "hebrew":
//     console.log("Shalom")
//             break;
//             default:
//                 console.log("01110011 01101111 01110010 01110010 01111001")

// }

// exercise 2

// let grade = prompt("Enter your grade:");

// if (grade > 90) {
//     console.log("A");
// } else if (grade >= 80 && grade <= 90) {
//     console.log("B");
// } else if (grade >= 70 && grade <= 80) {
//     console.log("C");
// } else {
//     console.log("D");
// }

// exercise 3

let verb = prompt("Enter a verb:");

if (verb.length >= 3) {
    if (verb.endsWith("ing")) {
        console.log(verb + "ly");
    } else {
        console.log(verb + "ing");
    }
} else {
    console.log(verb);
}



