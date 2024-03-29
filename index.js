const express = require('express');
const { server } = require('./src/config/config');
const cors = require('cors');
const app = express();


// Routes 
const personRoutes = require('./src/routes/person');
const accountRoutes = require('./src/routes/account');
const inputRoutes = require('./src/routes/input');

app.use(cors());
app.use(express.json());
app.use(personRoutes);
app.use(accountRoutes);
app.use(inputRoutes);


app.listen(server.port, () => {
    console.log(`Server running on port ${server.port}`);
});

