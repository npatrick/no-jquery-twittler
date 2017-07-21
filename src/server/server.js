const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 3000;

// Create the Express application
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../../public/')));

module.exports = app;
