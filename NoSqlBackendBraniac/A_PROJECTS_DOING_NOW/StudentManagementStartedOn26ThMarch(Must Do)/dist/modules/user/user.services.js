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
exports.UserService = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const admission_Semester_model_1 = require("../AdmissionSemester/admission.Semester.model");
const student_model_1 = require("../student/student.model");
const user_model_1 = require("./user.model");
const user_utils_1 = require("./user.utils");
const createIntoDb = (password, studentData) => __awaiter(void 0, void 0, void 0, function* () {
    //create a user object
    // const userData: NewUser = {
    //   role: "",
    //   password: "",
    //   id: ""
    // };
    const userData = {};
    //if password not given Use default password
    if (!password) {
        password = "Default Password";
    }
    else {
        userData.password = password;
    }
    //set student role
    //year semesterCode 4 digit code
    //find academic semester info
    userData.role = "student";
    //manually genertated id
    // userData.id = "20r30353";
    //find academic semester data from student collection
    const admissionSemester = yield admission_Semester_model_1.AcademicSemester.findById(studentData.admissionSemester);
    //transaction and roll  back
    const session = yield mongoose_1.default.startSession();
    try {
        session.startTransaction();
        userData.id = yield (0, user_utils_1.generateStudentId)(admissionSemester);
        //transaction --1
        const newUser = yield user_model_1.User.create([userData], { session }); // after using transaction it becomes  array
        if (!newUser.length) {
            throw new Error("Falied to create User");
        }
        studentData.id = newUser[0].id;
        studentData.user = newUser[0]._id;
        const newStudent = yield student_model_1.Student.create([studentData], { session });
        if (!newStudent) {
            throw new Error("Falied to create Student");
        }
        yield session.commitTransaction();
        yield session.endSession();
        return newStudent;
    }
    catch (error) {
        yield session.abortTransaction();
        yield session.endSession();
        console.log(error);
    }
    //end of transaction and roll  back
    //find academic semester data from student collection
});
exports.UserService = {
    createIntoDb
};
