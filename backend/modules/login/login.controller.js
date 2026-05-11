const authService = require('./login.service');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    try{
        const { email } = await authService.login(req.body);
        const token = jwt.sign(
             { email },
             process.env.JWT_SECRET, 
             { expiresIn: '1h' }
        );
        res.status(200).json({ success: true, data: { email, token } });
    }
    catch (error) {
        res.status(401).json({ success: false, message: error.message });
    }

}