"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const users_constants_1 = require("../constants/users.constants");
const auth_1 = require("../middlewares/auth");
// import { checkAuth } from '../middlewares/auth'
// import { checkAuth } from '../middlewares/auth'
const router = express_1.default.Router();
router.post('/create-user', 
// checkAuth(USER_ROLE.admin, USER_ROLE.user),
user_controller_1.userController.createUser);
router.get('/', (0, auth_1.checkAuth)(users_constants_1.USER_ROLE.admin, users_constants_1.USER_ROLE.user), user_controller_1.userController.getAllUsers);
router.get('/:id', user_controller_1.userController.getSingleUser);
router.patch('/:id', user_controller_1.userController.updateUser);
router.delete('/:id', user_controller_1.userController.deleteUser);
exports.userRoutes = router;
