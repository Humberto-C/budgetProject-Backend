const express = require('express');
const router = express.Router();
const { makeInput } = require('../controllers/input');


router.post('/input', makeInput);
module.exports = router;