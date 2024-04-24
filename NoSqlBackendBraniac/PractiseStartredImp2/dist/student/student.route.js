"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRoute = void 0;
const express_1 = __importDefault(require("express"));
const student_controller_1 = require("./student.controller");
// import { UserController } from "./user.controller";
// import { StudentController } from "./user.controller";
const router = express_1.default.Router();
router.get("", student_controller_1.StudentController.getAllStudent);
router.get("/get-single-student/:id", student_controller_1.StudentController.getSingleStudent);
router.patch("/update-single-student/:id", student_controller_1.StudentController.updateStudent);
exports.StudentRoute = router;
