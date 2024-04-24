import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { UserRoute } from "./modules/User/user.route";
import { StudentRoutes } from "./modules/Student/student.route";
import { AcademicRoutes } from "./modules/academicSemester/academic.route";
import { AcademicFacultyRoutes } from "./modules/academicFaculty/acdemicFaulty.route";
import { AcademicDepartmentRoutes } from "./modules/academicDepartment/academic.departnent.route";
// import { AcademicFacultyRoutes } from "./modules/academicFaculty/acdemicFaulty.route";
// import { AcademicFacultyRoutes } from "./modules/academicFaculty/acdemicFaulty.route";
const app = express();
app.use(express.json());
app.use(cors());

app.use("/create", UserRoute);
app.use("/api/v1", StudentRoutes);
app.use("/academic", AcademicFacultyRoutes);
app.use("/faculty", AcademicDepartmentRoutes);
// app.use((_err: any, req: Request, next: NextFunction) => {
//   let statusCode = 500;
//   let message = "Somethiing went wrong";
//   return res.st
// });

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  let statusCode = 5000;
  let message = "Somethig went weong";
  return res.status(statusCode).json({
    message: message,
    success: false,
    error: err
  });
});
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
