const config = {
    db: {
        server: process.env.DB_SERVER,
        port: Number(process.env.DB_PORT),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        options: {
            encrypt: false,
            trustServerCertificate: true
        }
    },
};  

module.exports = config;