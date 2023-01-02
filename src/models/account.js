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