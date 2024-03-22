const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    unique: true,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  cart: [
    {
      restroName: {
        type: String
      },
      restroImage: {
        type: String
      },
      menuName: {
        type: String
      },
      menuImage: {
        type: String
      },
      menuDescription: {
        type: String
      },
      menuPrice: {
        type: String
      },
    },
  ],
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

module.exports = User;
