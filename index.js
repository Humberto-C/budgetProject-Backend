const express = require('express');
const { server } = require('./src/config/config');
const cors = require('cors');
const app = express();
const db = require('./src/utils/postgres');

// Routes 
const personRoutes = require('./src/routes/person');

app.use(cors());
app.use(express.json());
app.use(personRoutes);

app.listen(server.port, () => {
    console.log(`Server running on port ${server.port}`);
});

