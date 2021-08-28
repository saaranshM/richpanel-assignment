const router = require("express").Router();
const axios = require("axios");
const client = require("../redis");

const url = "https://graph.facebook.com/v11.0/";

// helper //

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

router.post("/details", async (req, res) => {
  const body = req.body.data;
  try {
    const fbRes = await axios.get(url + body.userID, {
      params: {
        access_token: body.accessToken,
        fields: "first_name,last_name,name",
      },
    });
    const newToken = await getLongLivedAccessToken(body.accessToken);
    client.SET(body.userID, newToken, (error, result) => {
      if (error) throw new Error("redis-set-error");
    });
    res.status(200).json(fbRes.data);
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500);
  }
});

module.exports = router;
