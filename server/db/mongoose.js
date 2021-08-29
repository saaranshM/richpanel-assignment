//Import the mongoose module
const mongoose = require("mongoose");

require("dotenv").config({ path: __dirname + "/../.env" });

//Set up default mongoose connection
const mongoDB = process.env.MONGODB_URL;
mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MognoDB"));

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
