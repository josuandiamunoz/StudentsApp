const express = require('express');
const app = express();
const loginRoutes = require('./modules/login/login.routes');

app.use(express.json());
app.use('/login', loginRoutes);

module.exports = app;