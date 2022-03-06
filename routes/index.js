const express = require('express');

//import the routers for the notes created in the notes.js file
const notes_router = require('./notes');

const app = express();

app.use('/notes', notes_router);

module.exports = app;