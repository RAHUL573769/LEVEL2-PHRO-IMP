"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const router = express_1.default.Router();
router.get("/get-user", user_controller_1.UserController.getAllUser);
router.post("/create-user", user_controller_1.UserController.createUser);
router.get("/get-user/:id", user_controller_1.UserController.getSingleUser);
router.patch("/update-user/:id", user_controller_1.UserController.updateUser);
exports.UserRouter = router;
// http://localhost:5000/api/vi/users/get-user
// http://localhost:5000/api/vi/tours/get-tour
