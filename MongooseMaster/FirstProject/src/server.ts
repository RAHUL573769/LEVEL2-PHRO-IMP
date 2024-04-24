import app from "./app";
const port = 3000;

// getting-started.js
import mongoose from "mongoose";
import config from "./app/config";

main().catch((err) => console.log(err));

async function main() {
  // await mongoose.connect(`${process.env.DATABASE_URL}`);
  // await mongoose.connect(
  //   "mongodb+srv://apollo:MAdgISe9krr92bEC@cluster0.ga4zxwv.mongodb.net/?retryWrites=true&w=majority"
  // );

  await mongoose.connect(config.database as string);
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
app.listen(port, () => {
  console.log("Example app listening on port ");
});
