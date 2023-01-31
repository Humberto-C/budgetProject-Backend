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

module.exports.last10Moves = () => {
    let moves = db.query('select account_id, category, input_value, add_date::timestamp(0) from input order by add_date desc limit 10');
    return moves;
}