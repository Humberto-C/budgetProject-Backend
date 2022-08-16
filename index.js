const express = require('express');
const { server } = require('./src/config/config');
const app = express();


app.use((req, res, next) => {
    res.json({ status: true, message: 'ok', data: [1, 2, 3] });
})

app.listen(server.port, () => {
    console.log('Server is running on port: 5000');
});

