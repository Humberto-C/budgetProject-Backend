const express = require('express');
const router = express.Router();    
const db = require('../utils/postgres');
const validInfo = require('../guard/validInfo');
const { Authorization } = require('../guard/Authorization');
const { registerPerson, loginPerson, isVerify, dashboard} = require('../controllers/person');


router.post('/register', validInfo, registerPerson);
router.post('/login', validInfo, loginPerson);
router.get('/is-verify', Authorization, isVerify);
router.get('/dashboard', Authorization, dashboard);

module.exports = router;