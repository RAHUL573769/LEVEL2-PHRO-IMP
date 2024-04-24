import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(process.cwd(), ".env") });
export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  jwt_secret: process.env.JWT_SECRET,
  expires_in: process.env.EXPIRES_IN,
  refreshtokensecret: process.env.REFRESH_TOKEN_SECRET,
  refreshtokenexpires: process.env.REFRESH_TOKEN_EXPIRES,
  resetpasswordtoken: process.env.RESET_PASSWORD_TOKEN,
  resetpasswordtokentime: process.env.RESET_PASSWORD_TOKEN_EXPIRES,
  resetPasswordLink: process.env.RESET_PASSWORD_LINK,
  userEmail: process.env.EMAIL,
  app_password: process.env.APP_PASS
};
