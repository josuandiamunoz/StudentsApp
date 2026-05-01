const authService = require('./login.service');

exports.login = async (req, res) => {
    try{
        const email = await authService.login(req.body);
        res.status(200).json({ success: true, data: email });
    }
    catch (error) {
        res.status(401).json({ success: false, message: error.message });
    }

}