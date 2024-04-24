"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicDepartmentValidationSchemas = void 0;
const zod_1 = require("zod");
const academicDepartmentValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({ invalid_type_error: "Invalid Password" })
            .optional(),
        academicFaculty: zod_1.z.string({
            invalid_type_error: "Required"
        })
    })
});
const updateAcademicDepartmentValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({ invalid_type_error: "Invalid Password" })
            .optional(),
        academicFaculty: zod_1.z.string({
            invalid_type_error: "Required"
        })
    })
});
exports.AcademicDepartmentValidationSchemas = {
    academicDepartmentValidationSchema,
    updateAcademicDepartmentValidationSchema
};
