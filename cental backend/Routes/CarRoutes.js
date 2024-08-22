const express = require('express');
const CarController = require('../Controller/CarController');
const AouthToken = require('../Midleware/AuthenticationToken')
const authorizeRoles = require('../Midleware/authorizeRoles')
const router = express.Router();


router.post('/add-car', CarController.addCar )
router.get('/get-cars', CarController.getAllCars )
router.get('/car-details/:_id', CarController.getCarByID )
router.put('/car-update/:_id', CarController.updateCarDetails )
router.put('/car-delete/:_id', CarController.deleteCarByID )




module.exports = router;