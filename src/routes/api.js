const express = require('express');
const router = express.Router();
const API = require('../controllers/api');

// router.get('/', (req, res) => {
//     console.log(req);
//     res.json({ "Titulo": "Hola Mundo" });
// });

router.get('/', API.calcularPI);

module.exports = router;
