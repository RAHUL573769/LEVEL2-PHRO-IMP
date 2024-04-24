"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicDepartmentValidation = void 0;
const zod_1 = __importDefault(require("zod"));
const createAcademicValidation = zod_1.default.object({
    body: zod_1.default.object({
        name: zod_1.default.string({
            invalid_type_error: "Name must be String",
            required_error: "Academic Department is Required"
        }),
        academicFaculty: zod_1.default.string({
            invalid_type_error: "Academic Faculty must be string",
            required_error: "Academic Faculty  is Requied"
        })
    })
});
const updateAcademicValidation = zod_1.default.object({
    body: zod_1.default.object({
        name: zod_1.default
            .string({
            invalid_type_error: "Name must be String",
            required_error: "Academic Department is Required"
        })
            .optional(),
        academicFaculty: zod_1.default
            .string({
            invalid_type_error: "Academic Faculty must be string",
            required_error: "Academic Faculty  is Requied"
        })
            .optional()
    })
});
exports.AcademicDepartmentValidation = {
    createAcademicValidation,
    updateAcademicValidation
};
