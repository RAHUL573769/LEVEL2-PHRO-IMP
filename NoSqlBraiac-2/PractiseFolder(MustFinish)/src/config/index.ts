import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT,
  DATABASE_LOCAL: process.env.DB_LOCAL,
  DATABASE_CLOUD: process.env.DATABASE_CLOUD
};
