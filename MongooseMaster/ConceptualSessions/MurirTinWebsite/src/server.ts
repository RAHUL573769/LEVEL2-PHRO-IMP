require("dotenv").config();

import app from "./app";
import config from "./app/config";
const port = 3000;

// getting-started.js
const mongoose = require("mongoose");

server().catch((err) => console.log(err));

async function server() {
  try {
    await mongoose.connect(config.database);

    console.log("Databse Connected");
  } catch (error) {
    console.log(error);
  }
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
app.listen(port, () => {
  console.log(`Example app listening on port ${config.port}`);
});
