const studentsRepo = require('../students/students.repository');

exports.login = async ({email, password}) => {
    const user = await studentsRepo.findByEmail(email);
    if (user && user.Password === password) {
        return { email };
    }
    else {
        throw new Error('Invalid email or password');
    }
}