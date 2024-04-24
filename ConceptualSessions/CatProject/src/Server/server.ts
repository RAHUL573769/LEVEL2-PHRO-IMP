import app from "./app";
import config from "./config";
let port = config.PORT;

const mongoose = require("mongoose");

async function server() {
  try {
    await mongoose.connect(config.DB_URL);
    console.log("Db Connected");
  } catch (error) {
    console.log("Db Not Connected");
  }
}
server().catch((err) => console.log(err));
app.listen(port, () => {
  console.log(`Example app listening on port ${port} `);
});
