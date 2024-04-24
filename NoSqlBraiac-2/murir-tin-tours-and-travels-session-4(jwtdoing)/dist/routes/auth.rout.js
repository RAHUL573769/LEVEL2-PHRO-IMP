"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controllers/authController");
// import { checkAuth } from '../middlewares/auth'
// import { checkAuth } from '../middlewares/auth'
const router = express_1.default.Router();
router.post('/register', 
// checkAuth(USER_ROLE.admin, USER_ROLE.user),
authController_1.authController.register);
router.post('/login', authController_1.authController.login);
exports.AuthRoutes = router;
