const path = require('path');
const express = require('express');
const api = require('./routes/index.js')

const PORT = process.env.PORT || 3001;

const app = express();

//handle JSON and urlencoded form data
app.use(express.JSON());
app.use(express.urlencoded({extended: true}));
app.use('/api', api);

//routes needed:  
//html:  GET /notes -> returns the notes.html file
//      Get * -> returns the index.html file
//API:
//      GET /api/notes -> read the db.JSON file as JSON
//      POST /api/notes -> receive the new note and add it to db.JSON
//adding the note will require pulling db.json, parseing it, adding note
//then restringify the note
//      DELET /api/notes/:id -> receive the note id to delete

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
)