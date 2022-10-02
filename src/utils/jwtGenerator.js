const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

module.exports.jwtGenerator = (user_id) => {
    const payload = {
        user: user_id
    }
    return jwt.sign(payload, process.env.JWT, {expiresIn: "1hr"});
};

