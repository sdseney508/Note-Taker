const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const file_path = './db/db.json';

//get router for notes in the db.json database
notes.get('/', (req, res) => {
    fs.readFile(file_path).then((data) => res.json(JSON.parse(data)));
});

//this is for a specific tip.  didn see any requirement for it, but if there is a DELETE
//there must be a GET
notes / this.get('/:note_id', (req, res) => {
    const noteID = req.params.note_id;
    fs.readFile(file_path)
        .then((data) => JSON.parse(data))
        .then((json) => {
            const result = json.filter((title) => title.note_id === noteID);
            return result.length > 0
                ? res.json(result)
                : res.json('No note with that ID');
        });

});

//DELETE route for the bonus
notes.delete('./:note_id', (req, res) => {
    const noteID = req.params.note_id;
    fs.readFile(file_path)
        .then((data) => JSON.parse(data))
        .then((json) => {
        //use the object filter method to remove the one we want deleted. 
        const newobj = json.filter((note) => note.note_id !== noteID);

        //save the new object back to storage
        fs.writeFile(file_path, JSON.stringify(newobj, null, 4), (err) =>
            err ? console.error(err) : console.info(`\nNote ${noteID} was deleted`)
        );

        //give user a response if succesful
        res.json(`Note ${noteID} was deleted`);
    });

});


//post route for a new note
notes.post('/', (req, res) => {
    //log it so i can check that everything worked
    console.log(req.body);
    const parsed_data;
    const { title, text, note_id } = req.body;

    if (req.body) {
        const new_note = {
            title,
            text,
            note_id: uuidv4();
        };

        //now add the new note to the file.  first we read the file; then we
        //parse it, append it using .push(data) method, then write to file.
        fs.readFile(file_path, 'utf-8', (err, data) => {
            if (err) {
                console.err(err);
            }
            else {
                parsed_data = JSON.parse(data);
                parsed_data.push(new_note);
            }
        })
        //now we write to file
        fs.writeFile(file_path, JSON.stringify(parsed_data, null, 4), (err) =>
            err ? console.error(err) : console.info(`\nNew Note written to ${file_path}`)
        );
    }
    else {
        //log an error for later
        res.error('Something went wrong');
    }

});

module.exports = notes;