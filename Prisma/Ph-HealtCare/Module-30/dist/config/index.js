"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), ".env") });
exports.default = {
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
