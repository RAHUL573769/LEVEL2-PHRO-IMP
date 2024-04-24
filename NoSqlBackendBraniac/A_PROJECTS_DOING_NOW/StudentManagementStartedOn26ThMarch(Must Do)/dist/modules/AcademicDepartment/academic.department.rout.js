"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicDepartmentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateMiddleware_1 = require("../../middlewares/validateMiddleware");
const academic_department_controller_1 = require("./academic.department.controller");
const academic_department_validation_1 = require("./academic.department.validation");
const router = express_1.default.Router();
router.post("/create-academic-department", (0, validateMiddleware_1.validateMiddleWare)(academic_department_validation_1.AcademicDepartmentValidation.createAcademicValidation), academic_department_controller_1.AcademicDepartmentControllers.createAcademicDepartment);
router.get("/", academic_department_controller_1.AcademicDepartmentControllers.getAllAcademicDepartment);
router.patch("/:departmentIdId", academic_department_controller_1.AcademicDepartmentControllers.updateAcademicDepartment);
router.get("/:id", academic_department_controller_1.AcademicDepartmentControllers.getSingleAcademicDepartment);
exports.AcademicDepartmentRoutes = router;
