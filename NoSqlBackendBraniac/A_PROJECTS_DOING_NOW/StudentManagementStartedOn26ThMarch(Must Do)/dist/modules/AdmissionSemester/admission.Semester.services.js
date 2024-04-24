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
exports.AcademicSemesterServices = void 0;
const admission_Semester_model_1 = require("./admission.Semester.model");
const createAcademicSemesterintoDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    //semester name====>semster code
    const academicSemesterNameCodeMapper = {
        Autumn: "01",
        Summar: "02",
        Fall: "03"
    };
    if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
        throw new Error("Invalid Semester Code");
    }
    const result = yield admission_Semester_model_1.AcademicSemester.create(payload);
    return result;
});
const getAllAcademicSemester = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield admission_Semester_model_1.AcademicSemester.find();
    return result;
});
const getSingleAcademicSemester = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield admission_Semester_model_1.AcademicSemester.findById(id);
    return result;
});
const updateAcademicSemester = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield admission_Semester_model_1.AcademicSemester.findOneAndUpdate({ _id: id }, payload, {
        new: true
    });
    return result;
});
exports.AcademicSemesterServices = {
    createAcademicSemesterintoDb,
    getSingleAcademicSemester,
    getAllAcademicSemester,
    updateAcademicSemester
};
