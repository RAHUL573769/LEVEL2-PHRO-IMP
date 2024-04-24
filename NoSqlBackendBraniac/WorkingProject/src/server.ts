import app from "./app";
import config from "./config";
const port = 3000;
const mongoose = require("mongoose");
require("dotenv").config();
async function server() {
  try {
    await mongoose.connect(config.DB_URL);
    console.log("Db Connected");
  } catch (error) {
    console.log("Db Not Connected");
  }
}
server().catch((err) => console.log(err));

app.listen(config.PORT, () => {
  console.log(`Example app listening on port ${config.PORT}`);
});
