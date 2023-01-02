const db = require('../utils/postgres');

module.exports.makeIncome = ( input_value, account_id, person_id, category ) => {
    const income = db.query(
        'insert into input(input_value, account_id, person_id, category) values($1, $2, $3, $4) returning *',
        [input_value, account_id, person_id, category]
    )
    return income;
};

module.exports.makeExpense = ( input_value, account_id, person_id, category ) => {
    const expense = db.query(
        'insert into input(input_value, account_id, person_id, category) values($1, $2, $3, $4) returning *',
        [input_value, account_id, person_id, category]
    )
    return expense;
};

module.exports.makeTransfer = ( input_value, account_id, person_id, category ) => {
    const transfer = db.query(
        'insert into input(input_value, account_id, person_id, category) values($1, $2, $3, $4)',
        [input_value, account_id, person_id, category]
    )
    return transfer;
};