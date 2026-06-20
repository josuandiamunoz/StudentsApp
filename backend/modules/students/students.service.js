const studentsRepo = require('./students.repository');

exports.getAllStudents = async () => {
    return await studentsRepo.findAll();
};

exports.deleteStudent = async (identifier) => {
    return await studentsRepo.delete(identifier);
};
