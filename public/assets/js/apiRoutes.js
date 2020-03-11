var noteObj = require("../../../db/db.json");
const fs = require("fs");

module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        res.json(noteObj);
        console.log(noteObj);
        return
    });

    app.post("/api/notes", function (req, res) {
        var newNote = req.body;
        noteObj.push(newNote);
        res.json(newNote);
        var noteId = noteObj.map(function (note, i) {
            note.id = i + 1;
            return note;
        })
        console.log(noteId)
    });

};