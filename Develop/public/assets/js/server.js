const express = require('express');
const path = require('path');
const fs = require('fs');
var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});

module.exports = function (app) {

    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/api/notes", function (req, res) {
        res.readFile("../")
    })
};
