const express = require('express');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Array of emoji objects
const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '🚀', name: 'Rocket' },
    { emoji: '🍕', name: 'Pizza' },
    { emoji: '🎉', name: 'Party' },
    { emoji: '🌈', name: 'Rainbow' },
    { emoji: '🐱', name: 'Cat' },
    { emoji: '🌺', name: 'Flower' },
    { emoji: '📚', name: 'Book' },
    { emoji: '🍦', name: 'Ice Cream' },
    { emoji: '🎸', name: 'Guitar' },
    { emoji: '🌍', name: 'Earth' },
    { emoji: '🍔', name: 'Hamburger' },
    { emoji: '🚗', name: 'Car' },
    { emoji: '🎨', name: 'Art Palette' },
    { emoji: '🏆', name: 'Trophy' },
    { emoji: '🚲', name: 'Bicycle' },
    { emoji: '📷', name: 'Camera' },
    { emoji: '🍎', name: 'Apple' },
    { emoji: '🎧', name: 'Headphones' },
    { emoji: '🌟', name: 'Star' },
    { emoji: '🏡', name: 'House' },
]

// Game state
let currentPlayer = {
  name: 'Player 1',
  score: 0,
};

// Serve HTML file with form
app.get('/', (req, res) => {
  const randomEmoji = getRandomEmoji();
  const options = getOptions(randomEmoji.name);

  res.send(`
    <html>
      <head>
        <title>Emoji Guessing Game</title>
      </head>
      <body>
        <h1>Emoji Guessing Game</h1>
        <p>Score: ${currentPlayer.score}</p>
        <form action="/guess" method="post">
          <p>Guess the name of the emoji:</p>
          <p>${randomEmoji.emoji}</p>
          <input type="hidden" name="correctAnswer" value="${randomEmoji.name}">
          ${options.map((option, index) => `<input type="radio" name="guess" value="${option}" ${(index === 0) ? 'checked' : ''}>${option}<br>`).join('')}
          <br>
          <button type="submit">Submit Guess</button>
        </form>
      </body>
    </html>
  `);
});

// Handle guess submission
app.post('/guess', (req, res) => {
  const { guess, correctAnswer } = req.body;
  const isCorrect = guess === correctAnswer;

  if (isCorrect) {
    currentPlayer.score += 1;
  }

  res.send(`
    <html>
      <head>
        <title>Emoji Guessing Game</title>
      </head>
      <body>
        <h1>Emoji Guessing Game</h1>
        <p>${isCorrect ? 'Correct!' : 'Incorrect.'} Your current score is ${currentPlayer.score}.</p>
        <a href="/">Next</a>
      </body>
    </html>
  `);
});

// Helper function to get a random emoji
function getRandomEmoji() {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
}

// Helper function to get distractors for multiple-choice options
function getOptions(correctAnswer) {
  const options = [...emojis.map(e => e.name), correctAnswer];
  return options.sort(() => Math.random() - 0.5); // Shuffle options
}

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
