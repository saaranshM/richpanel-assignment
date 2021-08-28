const express = require("express");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/user", require("./routes/posts"));

app.listen(port, () => {
  console.log(`Server up on port ${port}`);
});
