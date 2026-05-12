const database = require('../../common/database-access/database');

class StudentsRepository {

    async findByEmail(email) {
        const sql = 'SELECT * FROM Students WHERE email = @email';
        const result = await database.query(sql, { email });
        return result.length > 0 ? result[0] : null;
    }

}

module.exports = new StudentsRepository();