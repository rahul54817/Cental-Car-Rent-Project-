const express = require('express');
const BookingController = require('../Controller/BookingController');
const AouthToken = require('../Midleware/AuthenticationToken')
const authorizeRoles = require('../Midleware/authorizeRoles')
const router = express.Router();

router.post('/add-booking',  BookingController.addBooking)
router.get('/all-bookings',  BookingController.getAllBookings)
router.get('/get-booking-by-user/:user_id',  BookingController.getBookingByUser)



module.exports = router;