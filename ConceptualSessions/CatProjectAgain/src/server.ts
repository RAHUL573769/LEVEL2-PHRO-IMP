import app from "./app";
import config from "./config";
import mongoose from "mongoose";
async function server() {
  app.listen(config.port, () => {
    mongoose.connect(config.database_url_local as string);
    console.log(`Example app listening on port ${config.port}`);
  });
}
server().catch((err) => console.log(err));
