"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
const client_1 = require("@prisma/client");
const auth_1 = require("../../middlewares/auth");
const router = express_1.default.Router();
router.post("/login", auth_controller_1.AuthController.loginUser);
router.post("/refresh-token", auth_controller_1.AuthController.refreshToken);
router.post("/forgot-password", auth_controller_1.AuthController.forgotPasswordController);
router.post("/change-password", (0, auth_1.auth)(client_1.UsersRole.ADMIN, client_1.UsersRole.DOCTOR, client_1.UsersRole.PATIENT, client_1.UsersRole.SUPER_ADMIN), auth_controller_1.AuthController.changePasswordController);
exports.AuthRouter = router;
