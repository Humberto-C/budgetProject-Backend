const express = require('express');
const router = express.Router();
const { makeInput, lastMovements, validTransfer } = require('../controllers/input');


router.post('/input', validTransfer, makeInput);
router.get('/input/dash_lastmovements', lastMovements)
module.exports = router;