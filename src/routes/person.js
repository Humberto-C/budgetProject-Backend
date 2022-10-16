const express = require('express');
const router = express.Router();
const { loginRegisterValidation } = require('../guard/validInfo');
const { Authorization } = require('../guard/Authorization');
const { registerPerson, loginPerson, isVerify, dashboard } = require('../controllers/person');


router.post('/register', loginRegisterValidation, registerPerson);
router.post('/login', loginRegisterValidation, loginPerson);
router.get('/is-verify', Authorization, isVerify);
router.get('/dashboard', Authorization, dashboard);

module.exports = router;