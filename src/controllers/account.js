const Account = require('../models/account');

module.exports.getAccounts = async (req, res, next) => {
    try {
        const { person } = req.body;

        const { checkAccounts } = Account;

        const accounts = await checkAccounts(person);

        console.log(accounts.rows);
        res.json(accounts.rows);


    } catch (error) {
        res.status(500).send("Server error");
    }
}

module.exports.newAccount = async (req, res, next) => {
    try {
        const { person, description, account_name, initial_value, account_number, currency } = req.body;

        console.log(person, description, account_name, initial_value, account_number, currency);

        const { addAccount } = Account;

        /* Check if a currency was selected*/
        if (currency === '') {
            res.status(400).json('Please select a valid Currency');
        }

        const newAccountData = { person, description, account_name, initial_value, account_number, currency };

        const account = await addAccount(newAccountData);

        console.log(account.rows);
        res.json(account.rows);


    } catch (error) {

        console.log(error.message);
        res.status(500).send("Server Error!");

    }
}

module.exports.getBalance = async (req, res, next) => {
    try {
        const { person_id, account_id } = req.body;
        const { checkBalance, checkCurrency } = Account;

        const balance = await checkBalance(person_id, account_id);
        const currency = await checkCurrency(person_id, account_id);

        res.json({...balance.rows[0], ...currency.rows[0]});

    } catch (error) {
        console.error(error.message);
    }
};