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
exports.StudentController = void 0;
const student_services_1 = require("./student.services");
const catchAsync_1 = require("../utils/catchAsync");
const getAllStudent = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // console.log("15", studentData);
        const result = yield student_services_1.StudentServices.getStudentsFromDb();
        console.log("22", result);
        res.status(202).json({
            message: "User Data FetchedSuccessfully",
            success: true,
            data: result
        });
    }
    catch (error) {
        console.log(error);
    }
}));
const getSingleStudent = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // console.log("15", studentData);
        const id = req.params.id;
        const result = yield student_services_1.StudentServices.getSingleStudentInfo(id);
        console.log("22", result);
        res.status(202).json({
            message: "Single User Data FetchedSuccessfully",
            success: true,
            data: result
        });
    }
    catch (error) {
        console.log(error);
    }
}));
const updateStudent = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // console.log("15", studentData);
        const id = req.params.id;
        const data = req.body;
        const result = yield student_services_1.StudentServices.updateStudentsInfoInDb(id, data);
        console.log("22", result);
        res.status(202).json({
            message: "Data Updated Succesfully",
            success: true,
            data: result
        });
    }
    catch (error) {
        console.log(error);
    }
}));
exports.StudentController = {
    getAllStudent,
    getSingleStudent,
    updateStudent
};
