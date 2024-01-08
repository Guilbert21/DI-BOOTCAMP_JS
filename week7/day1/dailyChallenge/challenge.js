// challenge.js
const greet = require('./greeting');
const readFile = require('./read-file');

// Greet the user
const userName = 'Yu';
const greetingMessage = greet(userName);
console.log(greetingMessage);

// Display a colorful message
(async () => {
  const displayColorfulMessage = await import('./colorful/colorful-message.mjs');
  displayColorfulMessage.default();
})();

// Read and display file content
readFile();
