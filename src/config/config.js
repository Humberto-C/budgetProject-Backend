const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    server: {
        port: process.env.SERVER_PORT,
    },
    postgresConfig: {
        host: process.env.PGHOST,
        user: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
        port: process.env.PGPORT,
        max: process.env.PGMAX,
        idleTimeoutMillis: 0,
        connectionTimeoutMillis: 0,
    },
};
