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
exports.AcademicDepartmentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const academicDepartment_validation_1 = require("./academicDepartment.validation");
const academic_controller_1 = require("./academic.controller");
// import validateRequest from '../../middlewares/validateRequest';
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
router.post("/create-academic-department", validateRequest(academicDepartment_validation_1.AcademicDepartmentValidationSchemas.academicDepartmentValidationSchema), academic_controller_1.AcademicDepartmentControllers.createAcademicDepartment);
router.get("/", academic_controller_1.AcademicDepartmentControllers.getAllAcademicDepartment);
router.get("/:semesterId", academic_controller_1.AcademicDepartmentControllers.getSingleAcademicDepartment);
router.patch("/:semesterId", validateRequest(academicDepartment_validation_1.AcademicDepartmentValidationSchemas.updateAcademicDepartmentValidationSchema), academic_controller_1.AcademicDepartmentControllers.updateAcademicDepartment);
exports.AcademicDepartmentRoutes = router;
