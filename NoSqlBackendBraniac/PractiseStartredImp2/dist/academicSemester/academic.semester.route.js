"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSemesterRoute = void 0;
const express_1 = __importDefault(require("express"));
const academic_semester_controller_1 = require("./academic.semester.controller");
const validateUser_1 = require("../utils/validateUser");
const academic_validation_1 = require("./academic.validation");
const router = express_1.default.Router();
router.get("/get-all-academic-semester", academic_semester_controller_1.AcademicSemesterController.getAllAcademicSemester);
router.get("/get-single-academic-semester/:id", academic_semester_controller_1.AcademicSemesterController.getSingleAcademicSemester);
router.patch("/update-single-academic-semester", academic_semester_controller_1.AcademicSemesterController.updateAcademicSemester);
router.post("/post-single-academic-semester", (0, validateUser_1.validateUser)(academic_validation_1.AcademicSemesterValidations.academicSemesterValidation), academic_semester_controller_1.AcademicSemesterController.createAllAcademicSemester);
exports.AcademicSemesterRoute = router;
