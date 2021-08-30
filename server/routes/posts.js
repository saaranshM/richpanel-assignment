const router = require("express").Router();
const axios = require("axios");
const client = require("../redis");
const User = require("../models/user");
const Conversation = require("../models/conversation");
const getPageAccessToken = require("../helpers/getPageAccessToken");
const got = require("got");
const fetch = require("node-fetch");

const url = "https://graph.facebook.com/v11.0/";

const getLongLivedAccessToken = async (accessToken) => {
  try {
    const res = await axios.get(url + "oauth/access_token", {
      params: {
        grant_type: "fb_exchange_token",
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        fb_exchange_token: accessToken,
      },
    });

    return res.data.access_token;
  } catch (error) {
    console.log(error.message);
    throw new Error();
  }
};

router.post("/login", async (req, res) => {
  const body = req.body.data;
  try {
    const fbRes = await axios.get(url + body.userID, {
      params: {
        access_token: body.accessToken,
        fields: "first_name,last_name,name",
      },
    });
    const newToken = await getLongLivedAccessToken(body.accessToken);
    const pageToken = await getPageAccessToken(body.userID, body.accessToken);
    client.SET("USER_ACCESS_TOKEN", newToken, (error, result) => {
      if (error) throw new Error("redis-set-error");
    });
    client.SET("PAGE_ACCESS_TOKEN", pageToken, (error, result) => {
      if (error) throw new Error("redis-set-error");
    });

    const dbUser = await User.findOne({ userId: body.userID });

    if (dbUser) {
      return res.status(200).json(dbUser.toObject());
    }
    console.log(fbRes.data);
    const userObj = {
      name: fbRes.data.name,
      firstName: fbRes.data.first_name,
      lastName: fbRes.data.last_name,
      userId: body.userID,
      accessToken: newToken,
    };

    const user = new User(userObj);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500);
  }
});

router.post("/send-message", async (req, res) => {
  const body = req.body;
  const accessToken = await getPageAccessToken();
  console.log(body);
  try {
    const fRes = await fetch(
      `https://graph.facebook.com/v11.0/me/messages?access_token=${accessToken}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          messaging_type: "RESPONSE",
          recipient: {
            id: body.psid,
          },
          message: {
            text: body.message,
          },
        }),
      }
    );
    if (fRes.ok) {
      const convo = await Conversation.findOne({ PSID: body.psid });
      const data = await fRes.json();
      const message = {
        message: {
          mid: data.message_id,
          text: body.message,
        },
        timestamp: new Date().getTime(),
      };
      await convo.addMessage(message, true);
      console.log(data);
    }
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
