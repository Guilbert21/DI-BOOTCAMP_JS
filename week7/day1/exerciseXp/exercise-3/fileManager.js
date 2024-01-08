const fs = require('fs');

function readFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    return content;
  } catch (error) {
    console.error(`Error reading file ${filePath}: ${error.message}`);
    return null;
  }
}

function writeFile(filePath, content) {
  try {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`File ${filePath} successfully written.`);
  } catch (error) {
    console.error(`Error writing to file ${filePath}: ${error.message}`);
  }
}

module.exports = {
  readFile,
  writeFile,
};