"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_route_1 = require("./modules/User/user.route");
const student_route_1 = require("./modules/Student/student.route");
const acdemicFaulty_route_1 = require("./modules/academicFaculty/acdemicFaulty.route");
const academic_departnent_route_1 = require("./modules/academicDepartment/academic.departnent.route");
// import { AcademicFacultyRoutes } from "./modules/academicFaculty/acdemicFaulty.route";
// import { AcademicFacultyRoutes } from "./modules/academicFaculty/acdemicFaulty.route";
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/create", user_route_1.UserRoute);
app.use("/api/v1", student_route_1.StudentRoutes);
app.use("/academic", acdemicFaulty_route_1.AcademicFacultyRoutes);
app.use("/faculty", academic_departnent_route_1.AcademicDepartmentRoutes);
// app.use((_err: any, req: Request, next: NextFunction) => {
//   let statusCode = 500;
//   let message = "Somethiing went wrong";
//   return res.st
// });
app.use((err, req, res, next) => {
    let statusCode = 5000;
    let message = "Somethig went weong";
    return res.status(statusCode).json({
        message: message,
        success: false,
        error: err
    });
});
app.get("/", (req, res) => {
    res.send("Hello World!");
});
exports.default = app;
