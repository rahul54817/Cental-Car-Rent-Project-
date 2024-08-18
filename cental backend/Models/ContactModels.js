const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+\@.+\..+/, "Please fill a valid email address"],
    },

    contact_number: {
      type: Number,
      required: true,
    },
    branches: [
      {
        address: {
          type: String,
          required: true,
        },
        contact: {
          type: Number,
          required: true,
        },
      },
    ],

    facebook_link: {
      type: String,
      required: true,
    },
    instagram_link: {
      type: String,
      required: true,
    },
    tweeter_link: {
      type: String,
      required: true,
    },
    linkedin_link: {
      type: String,
      required: true,
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("Contact", ContactSchema);
