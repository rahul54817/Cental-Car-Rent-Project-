const jwt = require('jsonwebtoken')


const AuthentiationToken = (req, res, next) => {
   const token = req.header('Authorization').replace('Bearer ', '') || req.body.token

    if(!token) {
        return res.status(401).json({message : 'Access Denied'})
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.user = verified;
        next()
        
    } catch (error) {
        res.status(400).json({ message: 'Invalid Token' });
        
    }
}

module.exports = AuthentiationToken;