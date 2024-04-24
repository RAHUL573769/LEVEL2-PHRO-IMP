import mongoose from "mongoose";
import app from "./app.";
import config from "./config";
const port = config.port;

async function server() {
  try {
    await mongoose.connect(config.database_cloud as string);
  } catch (error) {
    console.log(error);
  }
}

server().catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
