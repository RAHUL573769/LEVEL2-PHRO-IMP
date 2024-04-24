"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const userValidationSchema = zod_1.z.object({
    // id: z.string(),
    password: zod_1.z
        .string({
        invalid_type_error: "Password must be string"
    })
        .max(20, { message: "Password Cannot be more than 20 Characters" })
        .optional()
    // needsPasswordChange: z.boolean().optional(),
    // role: z.enum(["student", "faculty", "admin"]),
    // status: z.enum(["in-progress", "blocked"]).default("in-progress"),
    // isDeleted: z.boolean().optional().default(false)
});
exports.UserValidation = {
    userValidationSchema
};
