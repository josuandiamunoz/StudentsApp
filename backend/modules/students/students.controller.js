const studentsService = require('./students.service');

exports.getAllStudents = async (req, res) => {
    try {
        const students = await studentsService.getAllStudents();
        res.status(200).json({ success: true, data: students });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.deleteStudent = async (req, res) => {
    try {
        const { identifier } = req.params;
        const deleted = await studentsService.deleteStudent(identifier);

        if (!deleted) {
            return res.status(404).json({ success: false, message: 'Student not found' });
        }

        res.status(200).json({ success: true, message: 'Student deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
