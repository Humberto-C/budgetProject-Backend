
const { makeIncome, makeExpense, makeTransfer } = require('../models/input');

module.exports.makeInput = async (req, res, next) => {
    try {
        
        const { income, expense, transfer, input_value, account_id, person_id, category } = req.body;
        if(income){
            const transaction = await makeIncome(input_value, account_id, person_id, category);
            console.log(transaction.rows[0]);
            res.json(transaction.rows);
        }
        if(expense){
            const transaction = await makeExpense(input_value, account_id, person_id, category);
            console.log(transaction.rows[0]);
            res.json(transaction.rows);
        }
        if(transfer){
            const transaction = await makeTransfer(input_value, account_id, person_id, category);
            console.log(transaction.rows[0]);
            res.json(transaction.rows);
        }


    } catch (error) {
       console.error(error.message); 
    }
}