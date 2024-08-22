const express = require('express');
const TestimonialController = require('../Controller/TestimonialController')

const router = express.Router();

router.post('/add-testimonial', TestimonialController.addTestimonial)
router.get('/get-testimonials' , TestimonialController.getTestimonials)
router.put('/delete-testimonial/:_id' , TestimonialController.deleteTestimonialByID)

module.exports = router;