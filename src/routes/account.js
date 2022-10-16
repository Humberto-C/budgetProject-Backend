const express = require('express');
const router = express.Router();
const { getAccounts, newAccount } = require('../controllers/account');

router.post('/dashboard/accounts', getAccounts);
router.post('/dashboard/newaccount', newAccount);
module.exports = router;