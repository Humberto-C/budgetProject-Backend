const { Pool } = require('pg');
const { postgresConfig } = require('../config/config');
const pool = new Pool(postgresConfig);


// const poolHandler = async(config) => {
//     const client = await pool.connect();
//     try {
//         const res = await client.query(config);
//         return res.rows;
//     } catch (error) {
//         console.log(error.stack)
//         throw error;
//     } finally{
//         client.release();
//     }
// }

module.exports = {
    async query(text, params) {
        const start = Date.now()
        const res = await pool.query(text, params)
        const duration = Date.now() - start
        console.log('executed query', { text, duration, rows: res.rowCount })
        return res;
      }
};