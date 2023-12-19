const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./userRoute.js');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/api', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
