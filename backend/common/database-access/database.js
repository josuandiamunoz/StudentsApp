const sql = require('mssql');
const config = require('../config/env');

class Database{

    constructor() {
        this.pool = null;
    }

    async connect() {
        if (this.pool) return this.pool;
        try{
            this.pool = await sql.connect(config.db);
            return this.pool;
        }
        catch(err){
            throw err;
        }
    }

    async query(sql, params = {}) {
        try {
            const pool = await this.connect();
            const request =  pool.request();
            for(const key in params){
                request.input(key, params[key]);
            }
            const result = await request.query(sql);
            return result.recordset;
        } catch (err) {
            throw err;
        }    
    }

}

module.exports = new Database();