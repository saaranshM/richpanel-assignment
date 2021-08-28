const router = require("express").Router();
const axios = require("axios");

const url = "https://graph.facebook.com/v11.0/";

router.post("/details", async (req, res) => {
  const body = req.body;
  try {
    const fbRes = await axios.get(url + body.userID, {
      params: {
        access_token: body.accessToken,
        fields: "first_name,last_name",
      },
    });
    console.log(fbRes.data);
  } catch (error) {
    console.log(error.message);
  }
  res.status(200).json({
    test: "test",
  });
});

module.exports = router;
