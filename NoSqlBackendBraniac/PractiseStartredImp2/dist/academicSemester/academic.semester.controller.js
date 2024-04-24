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
exports.AcademicSemesterController = void 0;
const catchAsync_1 = require("../utils/catchAsync");
const academi_semester_service_1 = require("./academi.semester.service");
const getAllAcademicSemester = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // console.log("15", studentData);
        const result = yield academi_semester_service_1.AcademicSemesterServices.getAcademicSemesterFromDb();
        console.log("22", result);
        res.status(202).json({
            message: "Academic Semester Data Fetched Successfully",
            success: true,
            data: result
        });
    }
    catch (error) {
        console.log(error);
    }
}));
const createAllAcademicSemester = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // console.log("15", studentData);
        const data = req.body;
        const result = yield academi_semester_service_1.AcademicSemesterServices.createAcademicSemesterFromDb(data);
        console.log("22", result);
        res.status(202).json({
            message: "Academic Semester Created Successfully",
            success: true,
            data: result
        });
    }
    catch (error) {
        console.log(error);
    }
}));
const getSingleAcademicSemester = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // console.log("15", studentData);
        const { id } = req.params;
        const result = yield academi_semester_service_1.AcademicSemesterServices.getSingleAcademicSemesterInfo(id);
        console.log("22", result);
        res.status(202).json({
            message: "Single AcademicSemester Data Fetched Successfully",
            success: true,
            data: result
        });
    }
    catch (error) {
        console.log(error);
    }
}));
const updateAcademicSemester = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // console.log("15", studentData);
        const id = req.params.id;
        const data = req.body;
        const result = yield academi_semester_service_1.AcademicSemesterServices.updateAcademicSemesterInfoInDb(id, data);
        console.log("22", result);
        res.status(202).json({
            message: "AcademicSemester Updated Succesfully",
            success: true,
            data: result
        });
    }
    catch (error) {
        console.log(error);
    }
}));
exports.AcademicSemesterController = {
    getAllAcademicSemester,
    getSingleAcademicSemester,
    updateAcademicSemester,
    createAllAcademicSemester
};
