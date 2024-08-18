const authorizeRoles = (roles) => {
    return (req, res, next) => {
        console.log(req.user.role)
        const userRole = req.user.role;
        if (!roles.includes(userRole)) {
            return res.status(403).json({ message: 'You do not have permission to perform this action' });
        }
        next();
    };
};

module.exports = authorizeRoles;
