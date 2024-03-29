const db = require('../utils/postgres');


module.exports.userExist = (email) => {
    const result = db.query('SELECT * FROM PERSON WHERE email = $1', [email]);
    return result;
};

module.exports.createNewUser = ( email, bpassword, first_name, last_name, birth_date ) => {
    const newUser = db.query(
        'insert into person (email, password, first_name, last_name, birth_date) values($1, $2, $3, $4, $5) RETURNING *', 
        [email, bpassword, first_name, last_name, birth_date]);
    return newUser;
};

module.exports.getPersonFirstName = (person) => {
    const userData = db.query('SELECT person_id, first_name, last_name FROM person WHERE person_id=$1', [person]);
    return userData;
};

