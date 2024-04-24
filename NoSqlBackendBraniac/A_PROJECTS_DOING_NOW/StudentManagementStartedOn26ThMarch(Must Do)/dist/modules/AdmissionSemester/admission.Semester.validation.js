"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSemesterValidation = void 0;
const zod_1 = __importDefault(require("zod"));
const admission_Semester_utils_1 = require("./admission.Semester.utils");
const createAcademicSemesterValidation = zod_1.default.object({
    body: zod_1.default.object({
        name: zod_1.default.enum([...admission_Semester_utils_1.AcademicSemesterName]),
        year: zod_1.default.string(),
        code: zod_1.default.enum([...admission_Semester_utils_1.AcademicSemesterCodes]),
        startMonth: zod_1.default.enum([...admission_Semester_utils_1.Month]),
        endMonth: zod_1.default.enum([...admission_Semester_utils_1.Month])
    })
});
exports.AcademicSemesterValidation = { createAcademicSemesterValidation };
