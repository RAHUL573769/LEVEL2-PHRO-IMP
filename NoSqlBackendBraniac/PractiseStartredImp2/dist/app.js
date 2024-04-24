"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const user_route_1 = require("./user/user.route");
const globalErrorHandler_1 = __importDefault(require("./middlewares/globalErrorHandler"));
const notFound_1 = __importDefault(require("./middlewares/notFound"));
const student_route_1 = require("./student/student.route");
const academic_semester_route_1 = require("./academicSemester/academic.semester.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(globalErrorHandler_1.default);
app.use(notFound_1.default);
app.use("/user", user_route_1.UserRoute);
app.use("/student", student_route_1.StudentRoute);
app.use("/academic", academic_semester_route_1.AcademicSemesterRoute);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
exports.default = app;
