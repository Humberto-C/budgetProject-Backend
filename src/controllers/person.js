const Person = require('../models/person');
const bcrypt = require('bcryptjs');
const {jwtGenerator} = require('../utils/jwtGenerator');

module.exports.registerPerson = async(req, res, next) => {
    try {
        const { email, password, first_name, last_name, birth_date } = req.body;
        const {userExist, createNewUser} = Person;

        console.log(email, password, first_name, last_name, birth_date);

        // check if user exist (if exist then throw error)
        const person = await userExist(email);
        if (person.rows.length) {
            return res.status(401).json('User already exist!');
        }        
        
        //Check if the password has the criteria
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/;
        if(!passwordRegex.test(password)){
            return res.status(401).json('Password is invalid!');
        }

        // Bcrypt password
        const bpassword = bcrypt.hashSync(password, 8);

        // Enter the new user inside the database

        const newUser = await createNewUser(email, bpassword, first_name, last_name, birth_date);
        console.log(newUser.rows[0]);
        // generating our jwt token

        const token = jwtGenerator(newUser.rows[0].person)
        
        res.json({token});

        
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Server Error");
    }
};

module.exports.loginPerson = async(req, res ,next) => {
    try {
        const {userExist} = Person;

        // destructure the req.body

        const {email, password} = req.body;

        //2. check if user doesn't exist(if not )
        
        const person = await userExist(email);
        if(person.rows.length === 0) {
            return res.status(401).json('Email is incorrect');
        }

        const validPassword = await bcrypt.compare(password, person.rows[0].password);

        if(!validPassword){
            return res.status(401).json('Password is incorrect');
        }

        //4. give them the jwt token

        const token = jwtGenerator(person.rows[0].person);

        res.json({ token });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Server Error");
    }
};

module.exports.isVerify = async (req, res, next) => {
    try {
        res.json(true);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Server Error");
    }
};

module.exports.dashboard = async(req, res, next) => {
    try {
        //req.user has the payload
        // res.json(req.person);

        const person = await Person.getPersonFirstName(req.person);

        res.json(person.rows[0]);

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Server Error");
    }
};