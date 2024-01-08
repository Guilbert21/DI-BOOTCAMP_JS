
const { readFile, writeFile } = require('./fileManager');


const helloContent = readFile('Hello World.txt');
console.log(`Content of "Hello World.txt":\n${helloContent}\n`);


const contentToWrite = 'Writing to the file';
writeFile('Bye World.txt', contentToWrite);
