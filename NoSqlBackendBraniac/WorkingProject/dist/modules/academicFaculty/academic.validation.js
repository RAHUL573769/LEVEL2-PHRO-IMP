"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicFacultyValidationSchemas = void 0;
const zod_1 = require("zod");
const academicFacultyValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({ invalid_type_error: "Invalid Password" })
            .optional()
    })
});
const updateacademcFacultyValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({ invalid_type_error: "Invalid Password" })
            .optional()
    })
});
exports.AcademicFacultyValidationSchemas = {
    academicFacultyValidationSchema,
    updateacademcFacultyValidation
};
