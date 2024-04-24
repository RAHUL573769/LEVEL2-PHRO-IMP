"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter = express_1.default.Router();
userRouter.get("/all-users", (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Data Send",
        data: [
            {
                name: "Rahul Rudra",
                email: "rahul@gmail.com"
            }
        ]
    });
});
exports.default = userRouter;
