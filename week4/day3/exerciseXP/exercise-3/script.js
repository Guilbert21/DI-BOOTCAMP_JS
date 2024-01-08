const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
let epicPhrase = epic.reduce((accumulator, current) => { return accumulator + ' '+ current});
console.log(epicPhrase);