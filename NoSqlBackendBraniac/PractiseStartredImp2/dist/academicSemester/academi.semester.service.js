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
const academic_semester_conts_1 = require("./academic.semester.conts");
const academic_semester_model_1 = require("./academic.semester.model");
const getAcademicSemesterFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academic_semester_model_1.AcademicSemester.find();
    return result;
});
const createAcademicSemesterFromDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    if (payload.name &&
        payload.code &&
        academic_semester_conts_1.academicSemesterNameCodeMapper[payload.name] !== payload.code) {
        throw new Error("Invalid Semester Code");
    }
    const result = yield academic_semester_model_1.AcademicSemester.create(payload);
    return result;
});
const getSingleAcademicSemesterInfo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academic_semester_model_1.AcademicSemester.findById(id);
    return result;
});
const updateAcademicSemesterInfoInDb = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academic_semester_model_1.AcademicSemester.findByIdAndUpdate({ _id: id, payload }, { new: true });
});
exports.AcademicSemesterServices = {
    getSingleAcademicSemesterInfo,
    getAcademicSemesterFromDb,
    updateAcademicSemesterInfoInDb,
    createAcademicSemesterFromDb
};
