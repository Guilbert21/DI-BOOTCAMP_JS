const fs = require('fs');

function readFile() {
  try {
    const content = fs.readFileSync('./file-data.txt', 'utf-8');
    console.log(content);
  } catch (error) {
    console.error('Error reading the file:', error.message);
  }
}

module.exports = readFile;
