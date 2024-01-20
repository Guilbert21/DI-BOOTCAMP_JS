// exercise1

function findHalfAgeDate(year1, year2) {
    let olderYear = Math.max(year1, year2);
    let youngerYear = Math.min(year1, year2);

    let ageDifference = olderYear - youngerYear;
    let halfAgeDate = olderYear + ageDifference;

    return halfAgeDate;
}

let year1 = 1990;
let year2 = 1980;
let halfAgeDate = findHalfAgeDate(year1, year2);
console.log(halfAgeDate);

// exercise2

function validateZipCode(zipCode) {
    if (typeof zipCode !== 'number') {
        console.log('error');
        return;
    }

    const zipCodeString = zipCode.toString();
    if (zipCodeString.length !== 5) {
        console.log('error');
        return;
    }

    console.log('success');
}

let zipCode = 12345;
validateZipCode(zipCode);


// exercise3

function removeVowels(word) {
    const vowels = /[aeiou]/gi;
    const result = word.replace(vowels, '');
    return result;
}

function replaceVowels(word) {
    const vowels = /[aeiou]/gi;
    const replacements = {
        'a': '1',
        'e': '2',
        'i': '3',
        'o': '4',
        'u': '5'
    };
    const result = word.replace(vowels, (match) => replacements[match.toLowerCase()]);
    return result;
}

let word = prompt('Enter a word:');
let withoutVowels = removeVowels(word);
let replacedVowels = replaceVowels(word);

console.log(withoutVowels);
console.log(replacedVowels);
