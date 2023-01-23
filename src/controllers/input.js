
const { makeIncome, makeExpense, last10Moves } = require('../models/input');

module.exports.makeInput = async (req, res, next) => {
    try {
        
        const { income, expense, transfer, input_value, account_id, person_id, category, accountTo_id, tranferCategory } = req.body;
        console.log(account_id, person_id, category, accountTo_id, tranferCategory);
        if(income){
            let transaction = await makeIncome(input_value * 1, account_id, person_id, category);
            console.log(transaction.rows[0]);
            res.json('success');
        }
        if(expense){
            let transaction = await makeExpense(input_value * -1, account_id, person_id, category);
            console.log(transaction.rows[0]);
            res.json('success');
        }
        if(transfer){
            let income = await makeIncome(input_value * 1, accountTo_id, person_id, tranferCategory);
            let expense = await makeExpense(input_value * -1, account_id, person_id, tranferCategory);
            
            res.json('success'); 
        }


    } catch (error) {
       console.error(error.message); 
    }
};

module.exports.lastMovements = async (req, res, next) => {
    try {
        let lastMovements = await last10Moves();
        res.json(lastMovements.rows);
    } catch (error) {
        console.log(error.message);
    }
};