const express = require("express");
const cors = require("cors");
const client = require("./redis");
require("./db/mongoose");
require("dotenv").config();

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/user", require("./routes/posts"));
app.use("/api", require("./routes/webhook"));

process.on("SIGINT", cleanup);
process.on("SIGTERM", cleanup);

function cleanup() {
  client.flushall();
  client.quit(function () {
    console.log("Redis client stopped.");
  });
  process.exit(1);
}

app.listen(port, () => {
  console.log(`Server up on port ${port}`);
});
