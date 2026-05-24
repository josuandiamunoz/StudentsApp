const studentsService = require('./students.service');

exports.getAllStudents = async (req, res) => {
    try {
        const students = await studentsService.getAllStudents();
        res.status(200).json({ success: true, data: students });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
