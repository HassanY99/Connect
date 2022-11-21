const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
    // Get Token from header
    const token = req.header('x-auth-token');

    // If no token send error
    if(!token) {
        return res.status(401).json({ errors: 'No Token, Authorization denied!'})
    }

    // Verify the Token
    try {
        const decode = jwt.verify(token, config.get('jwtSecret'));

        req.user = decode.user;
        next();
    } catch (error) {
        console.log(error.message);
        res.status(401).json({ msg: 'Token is not valid'});
    }

}
