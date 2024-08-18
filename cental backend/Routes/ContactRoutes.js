const express = require('express');
const ContactController = require('../Controller/ContactController');
const AouthToken = require('../Midleware/AuthenticationToken')
const authorizeRoles = require('../Midleware/authorizeRoles')
const router = express.Router();


router.post('/add-contact-details', ContactController.createContact )
router.post('/update-contact-information', ContactController.updateContact )
router.get('/contact-details', ContactController.getContactDetails )




module.exports = router;