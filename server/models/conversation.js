const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema(
  {
    PSID: {
      type: String,
      required: true,
    },
    sender: {
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

conversationSchema.methods.addMessage = async function (message, sender) {
  const convo = this;
  console.log(message);
  const newMessage = {
    mid: message.message.mid,
    timestamp: message.timestamp,
    message: message.message.text,
    sender: sender,
  };

  convo.messages = convo.messages.concat(newMessage);
  await convo.save();
};

const Conversation = mongoose.model("Conversation", conversationSchema);

module.exports = Conversation;
