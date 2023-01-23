const db = require('../utils/postgres');

module.exports.checkAccounts = (person_id) => {
    const account = db.query('SELECT * FROM account WHERE person_id = $1', [person_id]);
    return account;
}

module.exports.addAccount = (accountObjData) => {
    const { person, description, account_name, initial_value, account_number, currency } = accountObjData;
    const order = 'INSERT INTO account(person, description, account_name, initial_value, account_number, currency) VALUES( $1, $2, $3, $4, $5, $6 ) RETURNING *';
    const valuesArray = [person, description, account_name, initial_value, account_number, currency];
    return db.query(order, valuesArray);
}

module.exports.checkBalance = (person_id, account_id) => {
    const balance = db.query('select sum(input_value) from input where person_id = $1 and account_id = $2', [person_id, account_id]);
    return balance;
};

module.exports.checkCurrency = (person_id, account_id) => {
    const currency = db.query(
        'select currency from account where person_id = $1 and account_id = $2',
        [person_id, account_id]
    )
    return currency;
};