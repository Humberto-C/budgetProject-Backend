const dotenv = require('dotenv');
dotenv.config();

console.log(dotenv.config());

module.exports = {
    server: {
        port: process.env.SERVER_PORT,
    }
};
