
const express = require('express');
const body_parser = require('body-parser');
const path = require('path');
// const mongoose = require('mongoose');
require('./server/config/mongoose')();
const app = express();
app.use(body_parser.json());
app.use(express.static(path.join(__dirname, './public/dist/public' )));

require('./server/config/routes.js')(app);

app.listen(8000, function(){
    console.log("Server is running!");
});
