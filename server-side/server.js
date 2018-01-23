// require files and library
const express = require('express');
const app = express();
// set port 3000 or 80 if it deployed
var port = process.env.PORT || 3000;
// set default direction for front-end and index
app.use(express.static(__dirname+'/../client-side/'));
// start listen on port
app.listen(port)
