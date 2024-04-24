"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentValidationSchemas = void 0;
const zod_1 = require("zod");
const userNameSchema = zod_1.z.object({
    firstName: zod_1.z.string(),
    middleName: zod_1.z.string(),
    lastName: zod_1.z.string()
});
const guardianSchema = zod_1.z.object({
    firstName: zod_1.z.string(),
    middleName: zod_1.z.string(),
    lastName: zod_1.z.string()
});
const localGuardianSchema = zod_1.z.object({
    firstName: zod_1.z.string(),
    middleName: zod_1.z.string(),
    lastName: zod_1.z.string()
});
const studentValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        id: zod_1.z.string(),
        password: zod_1.z.string(),
        student: zod_1.z.object({
            name: userNameSchema,
            gender: zod_1.z.enum(["male", "female"]),
            dateOfBirth: zod_1.z.string(),
            email: zod_1.z.string(),
            contactNumber: zod_1.z.string(),
            emergencyContactNumber: zod_1.z.string(),
            bloodGroup: zod_1.z.string(),
            presentAddress: zod_1.z.string(),
            permanentAddress: zod_1.z.string(),
            guardian: guardianSchema,
            localGuardian: localGuardianSchema,
            academicSemester: zod_1.z.string(),
            profileImage: zod_1.z.string(),
            isDeleted: zod_1.z.boolean()
        })
    })
});
exports.studentValidationSchemas = {
    studentValidationSchema
};
