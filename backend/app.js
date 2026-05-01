const express = require('express');
const cors = require('cors');
const app = express();
const loginRoutes = require('./modules/login/login.routes');

app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(express.json());
app.use('/login', loginRoutes);

module.exports = app;