import dotenv from 'dotenv';
import path from 'path';
dotenv.config({
  path: path.join(process.cwd(), '.env'),
});

export default {
  port: process.env.PORT,
  bcrypt_salt_rounds: process.env.BCRYPT,
  database_url: process.env.DB_URL_CLOUD,
  database_local: process.env.DB_URL_LOCAL,
  node_env: process.env.NODE_ENV,
  default_password: process.env.DEFAULT_PASS,
};
