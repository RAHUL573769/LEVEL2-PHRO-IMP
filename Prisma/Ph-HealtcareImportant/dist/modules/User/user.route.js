"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_comtroler_1 = require("./user.comtroler");
const userRouter = express_1.default.Router();
userRouter.get("/", (req, res) => {
    res.status(202).json({
        message: "UserRoute wORKING"
    });
});
userRouter.post("/user", user_comtroler_1.UserController.createUserController);
exports.UserRouter = userRouter;
