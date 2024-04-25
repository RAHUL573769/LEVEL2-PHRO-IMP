"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const userRouter = express_1.default.Router();
// const auth = (...roles: string[]) => {
//   return async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const token = req.headers.authorization;
//       // console.log(token);
//       if (!token) {
//         throw new Error("Yoiu are not verified");
//       }
//       const verifiedUser = verifyToken(token, "abcd");
//       console.log("Verified User", verifiedUser);
//       if (roles.length && !roles.includes(verifiedUser.role)) {
//         throw new Error("Yoiu are not verified");
//       }
//       next();
//       //   console.log(token);
//       //   console.log(roles);
//     } catch (error) {
//       next(error);
//     }
//   };
// };
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        // cb(null, "/uploads");
        cb(null, path_1.default.join(process.cwd(), "uploads"));
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, file.originalname);
    }
});
const upload = (0, multer_1.default)({ storage: storage });
userRouter.get("/get-user", user_controller_1.UserController.createAdminController);
userRouter.post("/create-user", // auth("ADMIN", "SUPER_ADMIN"),
// auth(UsersRole.ADMIN),
upload.single("file"), //must send as file from postman
user_controller_1.UserController.createAdminController);
exports.UserRouter = userRouter;
