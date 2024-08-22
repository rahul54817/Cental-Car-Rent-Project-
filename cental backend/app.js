const express = require('express')
const bodyParser = require('body-parser')
const userRoutes = require('./Routes/userRoutes')
const BookingRoutes = require('./Routes/BookingRoutes')
const CarRoutes = require('./Routes/CarRoutes')
const ContactRoutes = require('./Routes/ContactRoutes')
const TestimonialRoutes = require('./Routes/TestimonialRoutes')

const path = require("path");

const cors = require('cors')

const app = express();

const port = 8000;

app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api', userRoutes)
app.use('/api/booking', BookingRoutes)
app.use('/api/car', CarRoutes)
app.use('/api/contact', ContactRoutes)
app.use('/api/testimonial', TestimonialRoutes )




module.exports = app;

