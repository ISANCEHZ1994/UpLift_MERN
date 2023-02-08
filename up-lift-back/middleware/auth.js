const jwt = require('jsonwebtoken')
const config = require('config');

// created this so that we don't repeat code and can always check the jwtoken

module.exports = function( req, res, next ){
    // get token
    const token = req.header('x-auth-token');
    
    console.log(token);
    // check if no token
    if(!token){
        return res.status(401).json({ msg: 'No token, AUTHORIZATION DENIED' });
    };

    // verify
    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        req.user = decoded.user;
        next();        
    } catch (err){
        res.status(401).json({ msg: 'Token is not valid'});
    };
};

