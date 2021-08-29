const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    pageId: {
      type: String,
      required: true,
    },
    PSID: {
      type: String,
      required: true,
    },
    sender: {
      id: {
        type: String,
        required: true,
      },
      picture: {
        type: String,
      },
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    messages: [
      {
        mid: {
          type: String,
          required: true,
        },
        message: {
          type: String,
          default: "",
          required: true,
        },
        sender: {
          type: Boolean, // true if pageowner false otherwise
          required: true,
        },
        timestamp: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const Conversation = mongoose.model("Conversation", userSchmea);

module.exports = Conversation;
