const fs = require('fs');
const path = require('path');
const {animals} = require('./data/animals');
const express = require('express');
const e = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.static('public'));

    // parse incoming string or array data
    app.use(express.urlencoded({ extended: true }));
    // parse incoming JSON data
    app.use(express.json());

    //creating endpoints, which is pointed towards the files on line 9&10
    app.use('/api', apiRoutes);
    app.use('/', htmlRoutes);

app.listen(PORT, () =>{
    console.log(`API server now on port ${PORT}!`);
});