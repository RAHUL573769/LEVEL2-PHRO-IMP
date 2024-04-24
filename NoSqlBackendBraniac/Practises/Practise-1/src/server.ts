import app from "./app";
import config from "./config";
const port = 3000;

const mongoose = require("mongoose");

async function server() {
  try {
    mongoose.connect(config.DB_PASS);
    console.log("Db Connected");
  } catch (error) {
    console.log("Db Not Connected");
  }
}

server().catch((err) => {
  console.log(err);
});

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

app.listen(config.PORT, () => {
  console.log(`Example app listening on port ${config.PORT}`);
});
