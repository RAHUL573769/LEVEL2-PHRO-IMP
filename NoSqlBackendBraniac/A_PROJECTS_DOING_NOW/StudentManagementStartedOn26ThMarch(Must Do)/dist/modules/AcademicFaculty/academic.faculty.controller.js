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
exports.AcademicFacultyControllers = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const academic_faculty_services_1 = require("./academic.faculty.services");
const sendRespons_1 = require("../../utils/sendRespons");
const http_status_1 = __importDefault(require("http-status"));
const createAcademicFaculty = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academic_faculty_services_1.AcademicSemesterFacultyServices.createAcademicFacultyintoDb(req.body);
    (0, sendRespons_1.successResponse1)(res, {
        message: "Academic Faculty Created Successfully",
        statusCode: http_status_1.default.CREATED,
        data: result,
        status: "Success"
    });
}));
const getAllAcademicFaculty = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academic_faculty_services_1.AcademicSemesterFacultyServices.getAllAcademicFaculty();
    (0, sendRespons_1.successResponse1)(res, {
        message: "Academic Faculty Fetched Successfully",
        statusCode: http_status_1.default.OK,
        data: result,
        status: "Success"
    });
}));
const getSingleAcademicFaculty = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield academic_faculty_services_1.AcademicSemesterFacultyServices.getSingleAcademicFaculty(id);
    (0, sendRespons_1.successResponse1)(res, {
        message: "Single Academic Faculty Fetched Successfully",
        statusCode: http_status_1.default.OK,
        data: result,
        status: "Success"
    });
}));
const updateAcademicFaculty = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield academic_faculty_services_1.AcademicSemesterFacultyServices.updateAcademicFaculty(id, req.body);
    (0, sendRespons_1.successResponse1)(res, {
        message: " Academic Faculty Updated Successfully",
        statusCode: http_status_1.default.OK,
        data: result,
        status: "Success"
    });
}));
exports.AcademicFacultyControllers = {
    createAcademicFaculty,
    getSingleAcademicFaculty,
    getAllAcademicFaculty,
    updateAcademicFaculty
};
