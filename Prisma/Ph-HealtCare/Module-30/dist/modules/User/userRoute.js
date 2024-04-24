"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const userRouter = express_1.default.Router();
userRouter.get("/get-user", user_controller_1.UserController.createAdminController);
userRouter.post("/create-user", user_controller_1.UserController.createAdminController);
exports.UserRouter = userRouter;
