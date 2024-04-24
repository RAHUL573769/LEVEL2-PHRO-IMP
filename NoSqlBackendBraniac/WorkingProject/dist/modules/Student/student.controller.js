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
exports.studentController = void 0;
const student_service_1 = require("./student.service");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
// const catchAsync = (fn: RequestHandler) => {
//   return (req: Request, res: Response, next: NextFunction) => {
//     Promise.resolve(fn(req, res, next)).catch((err) => console.log(err));
//   };
// };
const getStudents = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { studentId } = req.params;
        const result = yield student_service_1.StudentServices.getSingleStudentFromDb(studentId);
        res.status(200).json({
            statusCode: 200,
            success: true,
            message: "Student is retrieved succesfully",
            data: result
        });
    }
    catch (error) {
        console.log(error);
    }
}));
const postStudents = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { studentData } = req.body;
        const result = yield student_service_1.StudentServices.createStudent(studentData);
        res.status(200).json({
            statusCode: 200,
            success: true,
            message: "Student Dat is  created succesfully",
            data: result
        });
    }
    catch (error) {
        console.log(error);
    }
}));
const getAllStudents = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield student_service_1.StudentServices.getAllStudentsFromDb();
        res.status(200).json({
            statusCode: 200,
            success: true,
            message: "All Student is retrieved succesfully",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
}));
const deleteStudent = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { studentId } = req.params;
        const result = yield student_service_1.StudentServices.deleteDataFromDb(studentId);
        res.status(200).json({
            statusCode: 200,
            success: true,
            message: "Student is Deleted succesfully",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
}));
exports.studentController = {
    getStudents,
    getAllStudents,
    deleteStudent,
    postStudents
};
