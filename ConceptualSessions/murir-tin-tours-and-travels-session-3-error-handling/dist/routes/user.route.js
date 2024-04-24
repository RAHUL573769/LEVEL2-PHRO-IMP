"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
/* eslint-disable no-unused-vars */
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const router = express_1.default.Router();
router.post('/create-user', user_controller_1.userController.createUser);
router.get('/', user_controller_1.userController.getAllUsers);
router.get('/:id', 
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
// (req: Request, res: Response, next: NextFunction) => {
//   const id = req.params.id
//   req.body.id = id
//   console.log(req.body)
//   console.log(id)
//   next()
// },
user_controller_1.userController.getSingleUser);
router.patch('/:id', user_controller_1.userController.updateUser);
router.delete('/:id', user_controller_1.userController.deleteUser);
exports.userRoutes = router;
