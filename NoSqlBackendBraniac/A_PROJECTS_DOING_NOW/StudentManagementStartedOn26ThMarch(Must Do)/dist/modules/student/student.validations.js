"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentValidations = void 0;
const zod_1 = __importDefault(require("zod"));
const createStudentValidation = zod_1.default.object({
    name: zod_1.default.string().refine((data) => {
        if (data.length < 5) {
            return "Name Must be 5Characters Long";
        }
    }, { message: "Name Must be Greater than 5 Letters" }),
    durationHours: zod_1.default.number().int().positive(),
    ratingAverage: zod_1.default.number().positive().min(1).max(5)
    //     discountPrice: z.number().int().refine((data)=>{
    //    if(data.discountPrice)
    //     })
});
exports.StudentValidations = { createStudentValidation };
