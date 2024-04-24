"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("../modules/user/user.route");
const admission_Semester_route_1 = require("../modules/AdmissionSemester/admission.Semester.route");
const academic_faculty_route_1 = require("../modules/AcademicFaculty/academic.faculty.route");
const academic_department_rout_1 = require("../modules/AcademicDepartment/academic.department.rout");
const globalRouter = express_1.default.Router();
globalRouter.use("/users", user_route_1.UserRoute);
globalRouter.use("/academic-semesters", admission_Semester_route_1.AcademicSemesterRoutes);
globalRouter.use("/academic-faculty", academic_faculty_route_1.AcademicFacultyRoutes);
globalRouter.use("/academic-department", academic_department_rout_1.AcademicDepartmentRoutes);
// const randomArray = [
//   {
//     path: "/users",
//     route: UserRoute
//   }
// ];
// randomArray.forEach((item) => {
//   globalRouter.use((item.path, item.route));
// });
exports.default = globalRouter;
