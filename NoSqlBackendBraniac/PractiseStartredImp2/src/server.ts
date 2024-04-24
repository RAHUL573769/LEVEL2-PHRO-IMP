import app from "./app";

import mongoose from "mongoose";
import config from "./config";
const port = 3000;

async function server() {
  try {
    await mongoose.connect(config.database_url as string);

    console.log("Db Connected");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {}
}
server();
