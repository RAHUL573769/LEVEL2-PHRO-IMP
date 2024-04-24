"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSemesterValidations = void 0;
const zod_1 = require("zod");
const academic_semester_conts_1 = require("./academic.semester.conts");
const academicSemesterValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.enum([...academic_semester_conts_1.AcademicSemesterNames]),
        year: zod_1.z.number(),
        code: zod_1.z.enum([...academic_semester_conts_1.AcademicSemesterCodes]),
        startMonth: zod_1.z.enum([...academic_semester_conts_1.AcademicSemesterMonths]),
        endMonth: zod_1.z.enum([...academic_semester_conts_1.AcademicSemesterMonths])
    })
});
exports.AcademicSemesterValidations = {
    academicSemesterValidation
};
