const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const { title } = require('process');
const file_path = './db/db.json';

//get router for notes in the db.json database
notes.get('/', (req, res) => {
    fs.readFile(file_path, 'utf8', (err,data) => {
        if (err) {
            console.error(err);
            res.status(500).send("Server Error");
        }
        else {
        const json = JSON.parse(data);
        return json.length > 0
            ? res.json(json)
            : res.json('No notes');
    }
    });
 
});

//DELETE route for the bonus
notes.delete('/:id', (req, res) => {
    const noteID = req.params.id;
    console.log(noteID);
    fs.readFile(file_path, 'utf8',(err,data) => {
        if (err) {
            console.error(err);
            res.status(500).send("Server Error");
        }
        else {
            const json = JSON.parse(data);
            console.log(json);
            //use the object filter method to remove the one we want deleted. 
            const newobj = json.filter((note) => note.id !== noteID);
        
            //save the new object back to storage
            fs.writeFile(file_path, JSON.stringify(newobj, null, 4), (err) =>
                err ? console.error(err) : console.info(`\nNote ${noteID} was deleted`)
            );
        
            //give user a response if succesful
            res.json(`Note ${noteID} was deleted`);

        }
    });
});

//post route for a new note
notes.post('/', (req, res) => {
    //log it so i can check that everything worked
    console.log(req.body);
    let parsed_data = [];
    const { title, text } = req.body;

    if (req.body) {
        const new_note = {
            title,
            text,
            id: uuidv4()
        };

        //now add the new note to the file.  first we read the file; then we
        //parse it, append it using .push(data) method, then write to file.
        fs.readFile(file_path, 'utf-8', (err, data) => {
            if (err) {
                console.err(err);
                res.status(500).send("Server Error");
            }
            else {
                parsed_data = JSON.parse(data);
                parsed_data.push(new_note);
                fs.writeFile(file_path, JSON.stringify(parsed_data, null, 4), (err) => {
                    err ? console.error(err) : console.info(`\nNew Note written to ${file_path}`)
                    res.status(200).send("Yeah");
                });

            }
        });
        //now we write to file
    }
    else {
        //log an error for later
        res.error('Something went wrong');
    }
});


notes.put('/api/notes', (req, res) => {
    //log it so i can check that everything worked
    console.log(req.body);
    let parsed_data = [];
    const { title, text } = req.body;

    if (req.body) {
        const new_note = {
            title,
            text,
            note_id: uuidv4()
        };

        //now add the new note to the file.  first we read the file; then we
        //parse it, append it using .push(data) method, then write to file.
        fs.readFile(file_path, 'utf-8', (err, data) => {
            if (err) {
                console.err(err);
                res.status(500).send("Server Error");
            }
            else {
                parsed_data = JSON.parse(data);
                parsed_data.push(new_note);
                fs.writeFile(file_path, JSON.stringify(parsed_data, null, 4), (err) => {
                    err ? console.error(err) : console.info(`\nNew Note written to ${file_path}`)
                    res.status(200).send("Yeah");
                });

            }
        });
        //now we write to file
    }
    else {
        //log an error for later
        res.error('Something went wrong');
    }
});
module.exports = notes;