// 1- Import Express dependency
//const express = require('express'); // commonjs
import express from 'express'; //mjs

// 2- Create App
const app = express();

// 3- Define Port adn Run Project
const port = 3000
app.listen(port, () => {
    console.log(`The server is listening on port ${port}`);
})

// 4- Routing
app.get('/', function(req, res) {
    res.json({msg: 'Hola Mundo Json'})
});

app.get('/hello', function(req, res) {
    res.send('Hola Mundo en express')
});