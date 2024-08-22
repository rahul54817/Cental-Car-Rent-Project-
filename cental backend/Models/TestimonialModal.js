const mongoose = require("mongoose");

const TestimonialSchema = new mongoose.Schema(
  {
    person_name: {
      type: String,
      required: true,
    },

    proffession: {
      type: String,
      required: true,
    },
    profile_img: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("testimonial", TestimonialSchema);