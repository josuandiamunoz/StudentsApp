require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const loginRoutes = require('./modules/login/login.routes');
const studentsRoutes = require('./modules/students/students.routes');

app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(express.json());
app.use('/login', loginRoutes);
app.use('/students', studentsRoutes);

module.exports = app;