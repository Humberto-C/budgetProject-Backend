const jwt = require("jsonwebtoken");
require("dotenv").config();


module.exports.Authorization = async (req, res, next) => {
    try {
        
        const jwtToken = req.header("token");

        if(!jwtToken){
            return res.status(403).json('Not Authorize');
        }

        const payload = jwt.verify(jwtToken, process.env.JWT);

        req.person = payload.user;
        
        
    } catch (error) {
        console.log(error.message);
        if(error.message === 'jwt expired'){
            return res.status(403).json(error.message);
        }
        return res.status(403).json("Not Authorize");
    }
    next();
} 