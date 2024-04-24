"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRotes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controller/user.controller");
const router = express_1.default.Router();
const getRoute = (req, res) => {
    console.log("Hello World");
};
// const createUser = async (req: Request, res: Response) => {
//   console.log(req.body);
//   try {
//     const userData = req.body;
//     const result = await User.create(userData);
//     console.log("Daata Added");
//     res.status(201).json({
//       message: "User Created",
//       status: "success",
//       data: result
//     });
//   } catch (error: any) {
//     console.log("Errror Found");
//   }
// };
router.post("/users", user_controller_1.userController.createUser);
router.get("/", user_controller_1.userController.getAllUser);
router.get("/:id", user_controller_1.userController.getSingleUser);
router.patch("/:id", user_controller_1.userController.updateUser);
exports.userRotes = router;
// conrouter.post("/createuser", userController.createUser);
// export default {
//   getRoute,
//   createUser
// };
