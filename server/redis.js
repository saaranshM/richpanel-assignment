const redis = require("redis");

const client = redis.createClient({
  port: 6379,
  host: "127.0.0.1",
});

client.on("connect", () => {
  console.log("Client connected to redis!");
});

client.on("error", (error) => {
  console.log(error.message);
});

client.on("ready", () => {
  console.log("Client connected to redis and ready to use!");
});

client.on("end", () => {
  console.log("Client disconnected from redis");
});

module.exports = client;
