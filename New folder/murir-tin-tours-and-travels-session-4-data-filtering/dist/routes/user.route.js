"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const checkAuth_1 = require("../middlewares/checkAuth");
// import User from '../models/user.model'
// import catchAsyncFunction from '../utils/catchAsync'
const router = express_1.default.Router();
router.post('/create-user', 
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
(0, checkAuth_1.checkAuth)('admin'), user_controller_1.userController.createUser);
router.get('/', 
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
(0, checkAuth_1.checkAuth)('user'), user_controller_1.userController.getAllUsers);
router.get('/:id', user_controller_1.userController.getSingleUser);
router.patch('/:id', user_controller_1.userController.updateUser);
router.delete('/:id', user_controller_1.userController.deleteUser);
exports.userRoutes = router;
