module.exports.loginRegisterValidation = (req, res, next) => {

    const { email, password, first_name, last_name, birth_date } = req.body;

    console.log(email, password, first_name, last_name, birth_date);

    const validEmail = (userEmail) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
    }

    if (req.path === '/register') {
        if (![email, password, first_name, last_name, birth_date].every(Boolean)) {
            return res.status(401).json("Missing credentials");
        } else if (!validEmail(email)) {
            return res.status(401).json('Invalid Email');
        }
    } else if (req.path === '/login') {
        if (![email, password].every(Boolean)) {
            return res.status(401).json('Missing Credentials');
        } else if (!validEmail(email)) {
            return res.status(401).json('Invalid Email');
        }
    }
    next();
};

module.exports.newAccountValidation = (req, res, next) => {

    const { account_name, description, account_number, initial_value, currency } = req.body;

    console.log( account_name, description, account_number, initial_value, currency );

    let checkLengthAndType = () => {
        
    }
}