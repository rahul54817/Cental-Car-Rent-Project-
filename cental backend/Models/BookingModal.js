const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
  {
    user_id : {
        type: mongoose.Schema.Types.ObjectId,
        required: true 

    },
    carType: {
      type: String,
      required: true,
    },
    pickUpPoint: {
      type: String,
      required: true,
    },
   
    pickUpDate: {
      type: String,
      required: true,
    },

    pickUpTime: {
      type: String,
      required: true,
    },

    dropPoint: {
      type: String,
      required: true,
    },

    dropDate: {
      type: String,
      required: true,
    },

    dropTime: {
      type: String,
      required: true,
    },

    amount : {
      type : String,
      require : true

    }
  },
  { timestamps: true } 
);

module.exports = mongoose.model("Booking", BookingSchema);
