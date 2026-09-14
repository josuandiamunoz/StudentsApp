const express = require('express');
const router = express.Router();
const controller = require('./students.controller');
const auth = require('../../common/middleware/auth');

router.get('/', auth, controller.getAllStudents);
router.delete('/delete/:identifier', auth, controller.deleteStudent);

module.exports = router;
