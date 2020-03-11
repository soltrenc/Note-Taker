const express = require('express');
const path = require('path');
const fs = require('fs');
var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

require("./public/assets/js/apiRoutes")(app);
require("./public/assets/js/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});

//var notes = [];