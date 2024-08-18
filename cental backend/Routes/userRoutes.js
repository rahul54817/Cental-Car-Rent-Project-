const express = require('express');
const UserController = require('../Controller/UserController');
const AouthToken = require('../Midleware/AuthenticationToken')
const authorizeRoles = require('../Midleware/authorizeRoles')
const router = express.Router();

router.post('/signup', UserController.createUser);
// router.get('/users', UserController.getAllUsers);
router.post('/login', UserController.loginUser);
router.get('/all_users',  UserController.getAllUser);
// router.get('/get_all_users', AuothenticationToken, AuthorizedRole(['admin']),  UserController.getAllUser)
// router.get('/admin', AouthToken, authorizeRoles(['admin']),UserController.adminAction )
// router.get('/user', AouthToken, authorizeRoles(['user']),  UserController.userAction)

module.exports = router 