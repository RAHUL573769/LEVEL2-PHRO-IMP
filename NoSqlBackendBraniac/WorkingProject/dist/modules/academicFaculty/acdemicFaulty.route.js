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
exports.AcademicFacultyRoutes = void 0;
const express_1 = __importDefault(require("express"));
const academic_validation_1 = require("./academic.validation");
const acadmic_controller_1 = require("./acadmic.controller");
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
router.post("/create-academic-faculty", validateRequest(academic_validation_1.AcademicFacultyValidationSchemas.academicFacultyValidationSchema), acadmic_controller_1.AcademicFacultyControllers.createAcademicFaculty);
router.get("/", acadmic_controller_1.AcademicFacultyControllers.getAllAcademicFaculty);
router.get("/:semesterId", acadmic_controller_1.AcademicFacultyControllers.getSingleAcademicFaculty);
router.patch("/:semesterId", validateRequest(academic_validation_1.AcademicFacultyValidationSchemas.updateacademcFacultyValidation), acadmic_controller_1.AcademicFacultyControllers.updateAcademicFaculty);
exports.AcademicFacultyRoutes = router;
