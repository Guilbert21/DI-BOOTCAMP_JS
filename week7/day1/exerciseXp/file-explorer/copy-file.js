
const fs = require('fs');

const sourceFilePath = 'source.txt';
const destinationFilePath = 'destination.txt';

const content = fs.readFileSync(sourceFilePath, 'utf-8');

fs.writeFileSync(destinationFilePath, content);

console.log(`Content from ${sourceFilePath} copied to ${destinationFilePath}`);
