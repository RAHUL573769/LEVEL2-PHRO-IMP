"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicRoutes = void 0;
const express_1 = __importDefault(require("express"));
const academin_validation_1 = require("./academin.validation");
const academic_controller_1 = require("./academic.controller");
// import { studentController } from "./student.controller";
const router = express_1.default.Router();
const validateRequest = (scheme) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield scheme.parseAsync({
                body: req.body
            });
            return next();
        }
        catch (error) {
            console.log(error);
        }
    });
};
router.post("/create-academic-semester", validateRequest(academin_validation_1.AcademicSemesterValidations.academicSemesterValidation), academic_controller_1.academicController.createAcademicSemester);
// router.get("/", studentController.getAllStudents);
// router.get("/:studentId", studentController.getStudents);
// router.delete("/:studentId", studentController.deleteStudent);
exports.AcademicRoutes = router;
