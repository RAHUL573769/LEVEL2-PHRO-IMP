"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = __importDefault(require("zod"));
const userSchema = zod_1.default.object({
    //   id: z.string(),  auto generated
    password: zod_1.default
        .string({
        invalid_type_error: "Paswoword Must be string"
    })
        .max(20, { message: "Password Caanot be More than 20 characters" })
        .optional(),
    needsPasswordChange: zod_1.default.boolean().optional(),
    role: zod_1.default.enum(["admin", "student", "faculty"]),
    isDeleted: zod_1.default.boolean().default(false),
    status: zod_1.default.enum(["in-progress", "blocked"])
});
exports.UserValidation = { userSchema };
