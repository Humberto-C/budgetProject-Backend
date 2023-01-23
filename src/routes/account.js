const express = require('express');
const router = express.Router();
const { getBalance, getAccounts, newAccount } = require('../controllers/account');

router.post('/dashboard/accounts', getAccounts);
router.post('/dashboard/newaccount', newAccount);
router.post('/dashboard/account_balance', getBalance);
module.exports = router;