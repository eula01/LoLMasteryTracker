// Setup
const express = require('express');
const bodyParser = require('body-parser');

const getRouter = require('./routes/get.js');

const app = express();
const PORT = 3050;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', getRouter);

// Initialisation
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));