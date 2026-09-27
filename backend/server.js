const app = require('./app');
const PORT = process.env.DB_API_PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});