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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSemesterControllers = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const sendRespons_1 = require("../../utils/sendRespons");
const http_status_1 = __importDefault(require("http-status"));
const admission_Semester_services_1 = require("./admission.Semester.services");
const createAcademicSemester = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield admission_Semester_services_1.AcademicSemesterServices.createAcademicSemesterintoDb(req.body);
    (0, sendRespons_1.successResponse1)(res, {
        message: "AcademicSemester Created Successfully",
        statusCode: 202,
        data: result,
        status: "Success"
    });
}));
const getAllAcademicSemester = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield admission_Semester_services_1.AcademicSemesterServices.getAllAcademicSemester();
    (0, sendRespons_1.successResponse1)(res, {
        message: "AcademicSemester Fetched Successfully",
        statusCode: http_status_1.default.OK,
        data: result,
        status: "Success"
    });
}));
const getSingleAcademicSemester = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield admission_Semester_services_1.AcademicSemesterServices.getSingleAcademicSemester(id);
    (0, sendRespons_1.successResponse1)(res, {
        message: "Single AcademicSemester Fetched Successfully",
        statusCode: http_status_1.default.OK,
        data: result,
        status: "Success"
    });
}));
const updateAcademicSemester = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield admission_Semester_services_1.AcademicSemesterServices.updateAcademicSemester(id, req.body);
    (0, sendRespons_1.successResponse1)(res, {
        message: " AcademicSemester Updated Successfully",
        statusCode: http_status_1.default.OK,
        data: result,
        status: "Success"
    });
}));
exports.AcademicSemesterControllers = {
    createAcademicSemester,
    getAllAcademicSemester,
    getSingleAcademicSemester,
    updateAcademicSemester
};
