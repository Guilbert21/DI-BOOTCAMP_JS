// read-file.js
const fs = require('fs');
const path = require('path');

function readAndDisplayFileContent() {
  const filePath = path.join(__dirname, 'files', 'file-data.txt');
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    console.log('File Content:');
    console.log(content);
  } catch (error) {
    console.error('Error reading the file:', error.message);
  }
}

module.exports = readAndDisplayFileContent;
