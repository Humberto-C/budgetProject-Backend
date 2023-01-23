const express = require('express');
const router = express.Router();
const { makeInput, lastMovements } = require('../controllers/input');


router.post('/input', makeInput);
router.get('/input/dash_lastmovements', lastMovements)
module.exports = router;