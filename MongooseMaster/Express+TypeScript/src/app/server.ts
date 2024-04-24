import { Server } from "http";
import app from "./app";
const port = 3000;
require("dotenv").config();

let server: Server;
async function bootstrap() {
  const server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}
bootstrap();
