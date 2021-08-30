const router = require("express").Router();
const axios = require("axios");
const Conversation = require("../models/conversation");
const getPageAccessTokenFromRedis = require("../helpers/getPageAccessToken");

// helpers //

// const getPageAccessToken = () => {
//   return new Promise((resolve, reject) => {
//     client.GET("PAGE_ACCESS_TOKEN", function (error, result) {
//       if (error) reject(new Error("redis-set-error"));
//       resolve(result);
//     });
//   });
// };
const getMessageSenderDetails = async (psId) => {
  console.log("exe");
  const pgToken = await getPageAccessTokenFromRedis();

  try {
    const params = {
      fields: "first_name,last_name,profile_pic",
      access_token: pgToken,
    };
    const res = await axios.get(`https://graph.facebook.com/${psId}`, {
      params,
    });
    return res.data;
  } catch (error) {
    console.log(error.message);
    if (error) throw new Error("get-user-details-failed");
  }
};

// Creates the endpoint for our webhook
router.post("/webhook", async (req, res) => {
  let body = req.body;
  console.log("EXECUTED");
  // Checks this is an event from a page subscription
  if (body.object === "page") {
    // Iterates over each entry - there may be multiple if batched

    for (const entry of body.entry) {
      // Gets the message. entry.messaging is an array, but
      // will only ever contain one message, so we get index 0
      let webhook_event = entry.messaging[0];

      if (webhook_event.hasOwnProperty("message")) {
        console.log("hey", webhook_event.sender.id);
        const senderDetails = await getMessageSenderDetails(
          webhook_event.sender.id
        );
        console.log(senderDetails);
        const convo = await Conversation.findOne({
          PSID: webhook_event.sender.id,
        });
        if (convo) {
          console.log("broken");
          await convo.addMessage(webhook_event);
          break;
        }
        const conversationObj = {
          PSID: webhook_event.sender.id,
          sender: {
            picture: senderDetails.profile_pic,
            firstName: senderDetails.first_name,
            lastName: senderDetails.last_name,
          },
        };
        console.log(conversationObj);
        const conversation = new Conversation(conversationObj);
        await conversation.save();
        await conversation.addMessage(webhook_event, false);
      }
    }

    // Returns a '200 OK' response to all requests
    res.status(200).send("EVENT_RECEIVED");
  } else {
    // Returns a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }
});

// Adds support for GET requests to our webhook
router.get("/webhook", (req, res) => {
  // Your verify token. Should be a random string.
  let VERIFY_TOKEN = "webhook";

  // Parse the query params
  let mode = req.query["hub.mode"];
  let token = req.query["hub.verify_token"];
  let challenge = req.query["hub.challenge"];

  // Checks if a token and mode is in the query string of the request
  if (mode && token) {
    // Checks the mode and token sent is correct
    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      // Responds with the challenge token from the request
      console.log("WEBHOOK_VERIFIED");
      res.status(200).send(challenge);
    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);
    }
  }
});

module.exports = router;
