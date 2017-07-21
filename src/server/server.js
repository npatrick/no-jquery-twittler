const express = require('express');
const bodyParser = require('body-parser'); // extracts the entire body portion of incoming req to be used as req.body
const path = require('path');

const PORT = process.env.PORT || 3000;

// Create the Express application
const app = express();

app.use(bodyParser.urlencoded({ extended: false })); // modify express to take url that contain any format/type of file
app.use(bodyParser.json()); // parses the text as JSON and set to req.body
app.use(express.static(path.join(__dirname, '../public/')));

module.exports = app;
