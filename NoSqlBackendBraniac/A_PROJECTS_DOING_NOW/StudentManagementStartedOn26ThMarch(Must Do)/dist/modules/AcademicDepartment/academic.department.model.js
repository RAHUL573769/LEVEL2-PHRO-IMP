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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicDepartment = void 0;
const mongoose_1 = require("mongoose");
const AppError_1 = require("../../classes/AppError");
const academicDepartmentSchema = new mongoose_1.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    academicFaculty: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "AcademicFaculty"
    }
}, {
    timestamps: true
});
// class AppError extends Error {
//   public statusCode: number;
//   constructor(statusCode: number, message: string, stack = "") {
//     super(message);
//     this.statusCode = statusCode;
//     if (stack) {
//       this.stack = stack;
//     } else {
//       Error.captureStackTrace(this, this.constructor);
//     }
//   }
// }
academicDepartmentSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const isAcademicDepartmentExists = yield exports.AcademicDepartment.findOne({
            name: this.name
        });
        if (isAcademicDepartmentExists) {
            throw new Error("Academic Department Exists");
        }
        next();
    });
});
academicDepartmentSchema.pre("findOneAndUpdate", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        //query middleware
        //query middleware
        const query = this.getQuery();
        const isDepartmentExists = yield exports.AcademicDepartment.findOne(query);
        if (!isDepartmentExists) {
            throw new AppError_1.AppError("This Department Does Not Exists", 404);
        }
        next();
        //   console.log(query);
    });
});
exports.AcademicDepartment = (0, mongoose_1.model)("AcademicDepartment", academicDepartmentSchema);
