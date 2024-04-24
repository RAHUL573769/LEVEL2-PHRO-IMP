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
exports.AcademicSemesterModel = exports.AcademicSemesterName = exports.months = void 0;
const mongoose_1 = require("mongoose");
exports.months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
exports.AcademicSemesterName = [
    "Autumn",
    "Fall",
    "Summer"
];
const AcademicSemesterCode = ["01", "02", "03"];
const academicSemesterSchema = new mongoose_1.Schema({
    name: {
        type: String,
        // required: true
        enum: {
            values: exports.AcademicSemesterName
        }
    },
    year: {
        type: Date
    },
    code: {
        type: String,
        enum: {
            values: AcademicSemesterCode
        }
        // required: true
    },
    startMonth: {
        type: String,
        enum: exports.months
    },
    endMonth: {
        type: String,
        enum: exports.months
    }
});
academicSemesterSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const isSemesterExists = yield exports.AcademicSemesterModel.findOne({
            name: this.name,
            year: this.year
        });
        if (isSemesterExists) {
            throw new mongoose_1.Error("Semester Alresdy exist");
        }
        next();
    });
});
exports.AcademicSemesterModel = (0, mongoose_1.model)("AcademicSemester", academicSemesterSchema);
