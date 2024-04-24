import app from "./app";

const port = 5000;
import mongoose from "mongoose";
import config from "./config";

async function server() {
  try {
    mongoose.connect(config.DATABASE_LOCAL as string);

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
    console.log("Database and Server is Running");
  } catch (error) {
    console.log(error);
  }
}

server();
