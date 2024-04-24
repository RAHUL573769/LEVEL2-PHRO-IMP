"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
const checkAuth_1 = require("../middlewares/checkAuth");
const user_constants_1 = require("../constants/user.constants");
// import { userController } from '../controllers/user.controller'
// import { checkAuth } from '../middlewares/checkAuth'
// import User from '../models/user.model'
// import catchAsyncFunction from '../utils/catchAsync'
const router = express_1.default.Router();
router.post('/register', 
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
auth_controller_1.authController.register);
router.post('/refresh-token', 
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
auth_controller_1.authController.refreshToken);
router.post('/login', 
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
auth_controller_1.authController.login);
router.patch('/change-password', (0, checkAuth_1.checkAuth)(user_constants_1.USER_ROLE.admin, user_constants_1.USER_ROLE.user), 
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
auth_controller_1.authController.changePassword);
// router.post(
//   '/login',
//   // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
//   authController.login,
// )
exports.authRoutes = router;
