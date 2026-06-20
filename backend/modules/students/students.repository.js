const database = require('../../common/database-access/database');

class StudentsRepository {

    async findByEmail(email) {
        const sql = 'SELECT * FROM Students WHERE email = @email';
        const result = await database.query(sql, { email });
        return result.length > 0 ? result[0] : null;
    }

    async findAll() {
        const sql = 'SELECT * FROM Students';
        return await database.query(sql);
    }

    async delete(identifier) {
        const sql = 'DELETE FROM Students WHERE Identifier = @identifier';
        const deleted = await database.delete(sql, { identifier });
        return deleted;
    }

}

module.exports = new StudentsRepository();