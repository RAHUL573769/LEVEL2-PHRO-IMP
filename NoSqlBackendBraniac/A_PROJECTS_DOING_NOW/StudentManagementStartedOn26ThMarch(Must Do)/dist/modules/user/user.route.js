"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
// const validateMiddleWare = (schema: ZodSchema) => {
//   return async (req: Request, res: Response, next: NextFunction) => {
//     validations
//     try {
//       const zodParsedData = await schema.parseAsync(req.body);
//     } catch (error) {
//       next(error);
//       console.log(error);
//     }
//   };
// };
router.post("/create-student", // validateMiddleWare(UserValidation.userSchema),
// validateMiddleWare(StudentValidations.createStudentValidation),
user_controller_1.UserControllers.createStudent);
exports.UserRoute = router;
