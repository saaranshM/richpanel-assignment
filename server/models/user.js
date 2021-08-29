const mongoose = require("mongoose");

const userSchmea = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },

    userId: {
      type: String,
      required: true,
    },
    accessToken: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchmea);

module.exports = User;
