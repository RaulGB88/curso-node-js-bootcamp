import express from "express";

const router = express.Router();

// Routing
router.get('/', function(req, res) {
    res.json({msg: 'Hola Mundo Json'})
});

router.get('/hello', function(req, res) {
    res.send('Hola Mundo en express')
});

export default router;