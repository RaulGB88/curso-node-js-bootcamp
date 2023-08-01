import express from "express";

const router = express.Router();

// ---- Routing ----
// Normal Function
/*
router.get('/', function(req, res) {
    res.json({msg: 'Hola Mundo Json GET'})
});

router.post('/', function(req, res) {
    res.json({msg: 'Hola Mundo Json POST'})
});

router.get('/hello', function(req, res) {
    res.send('Hola Mundo en express')
});
*/

// Anonymous Function
router.get('/', (req, res) => {
    res.json({msg: 'Hola Mundo Json GET'})
});

router.post('/', (req, res) => {
    res.json({msg: 'Hola Mundo Json POST'})
});

router.get('/hello', (req, res) => {
    res.send('Hola Mundo en express')
});


// Route
router.route('/')
    .get(function(req, res) {
    res.json({msg: 'Hola Mundo Json GET'})
    })
    .post(function(req, res) {
    res.json({msg: 'Hello Mundo en express POST'})
    });

export default router;