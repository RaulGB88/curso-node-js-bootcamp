// 1- Import Express dependency
//const express = require('express'); // commonjs
import express from 'express'; //mjs
import userRoutes from './routes/userRoutes.js';

// 2- Create App
const app = express();

// Hability Pug
app.set('view engine', 'pug');
app.set('views', './views');

// 3- Define Port adn Run Project
const port = 3000
app.listen(port, () => {
    console.log(`The server is listening on port ${port}`);
})

// 4- Routing
app.use('/auth', userRoutes);