const client = require("./redis");
const app = require("./app");
require("./db/mongoose");
require("dotenv").config();
const socketio = require("socket.io");

const port = process.env.PORT || 3000;

app.use("/user", require("./routes/posts"));
app.use("/api", require("./routes/webhook"));

const http = app.listen(port, () => {
  console.log(`Server up on port ${port}`);
});

const io = socketio(http, {
  cors: {
    origins: ["http://localhost:8080"],
  },
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

process.on("SIGINT", cleanup);
process.on("SIGTERM", cleanup);

function cleanup() {
  client.quit(function () {
    console.log("Redis client stopped.");
  });
  process.exit(1);
}
