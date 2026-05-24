const studentsRepo = require('./students.repository');

exports.getAllStudents = async () => {
    return await studentsRepo.findAll();
};
