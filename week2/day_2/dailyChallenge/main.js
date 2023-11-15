// let str = prompt("your advice?")
// str = parseInt(str)
// let str = "The movie is not that bad, i like it" 

// let wordNot = str.indexOf("not")
// console.log(wordNot)
// let wordBad = str.indexOf("bad")
// console.log(wordBad)

// if (wordBad>wordNot){
//    console.log(str.replace("not that bad", "good"));
//    console.log(str)
// } else {
//     console.log(str)
// }

// let sentence =prompt("Enter a sentence caontaining the words not bad:")
// let wordNot = sentence.indexOf("not")
// let wordBad = sentence.indexOf("bad")

// if (wordBad>wordNot){
//     console.log(sentence.replace("not", "good"));
//     // console.log(sentence)
//     }

let sentence = prompt(`Enter a sentence that contains the words "not and bad"`);
let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");

if (wordNot !== -1 && wordBad !== -1 && wordNot < wordBad) {
    let result = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
    console.log(result);
} else {
    console.log(sentence);
}






