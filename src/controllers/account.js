const Account = require('../models/account');

module.exports.getAccounts = async (req, res, next) => {
    try {
        const { person } = req.body;
        console.log(person, 'aquivamos');

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