"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
const checkAuth_1 = require("../middlewares/checkAuth");
const user_constants_1 = require("../constants/user.constants");
const router = express_1.default.Router();
router.post('/login', auth_controller_1.authController.login);
router.post('/register', auth_controller_1.authController.register);
router.post('/change-password', (0, checkAuth_1.checkAuth)(user_constants_1.USER_STATUS.admin, user_constants_1.USER_STATUS.user), auth_controller_1.authController.changePassword);
exports.authRoutes = router;
