const express = require('express');
const app = express();
const port = 3000;
const authrouter = require('./auth');

app.get('/', (req, res) => {
  res.send('Hello, Authentication is for today!');
});

app.use('/auth', authrouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});