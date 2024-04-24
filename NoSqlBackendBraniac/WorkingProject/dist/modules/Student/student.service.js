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
exports.StudentServices = void 0;
const student_model_1 = require("./student.model");
const createStudent = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_model_1.StudentModel.create(payLoad);
    return result;
});
const getAllStudentsFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_model_1.StudentModel.find()
        .populate("admissionSemester")
        .populate({
        path: "academicDepartment",
        populate: {
            path: "academicFaculty"
        }
    });
    return result;
});
const getSingleStudentFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_model_1.StudentModel.aggregate([{ $match: { id } }]);
    return result;
});
const deleteDataFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_model_1.StudentModel.updateOne({ id }, { isDeleted: true });
    return result;
});
exports.StudentServices = {
    getAllStudentsFromDb,
    getSingleStudentFromDb,
    deleteDataFromDb,
    createStudent
};
