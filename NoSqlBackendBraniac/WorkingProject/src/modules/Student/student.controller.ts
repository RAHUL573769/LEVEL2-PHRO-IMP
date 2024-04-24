import { NextFunction, Request, RequestHandler, Response } from "express";
import { StudentServices } from "./student.service";
import catchAsync from "../../utils/catchAsync";

// const catchAsync = (fn: RequestHandler) => {
//   return (req: Request, res: Response, next: NextFunction) => {
//     Promise.resolve(fn(req, res, next)).catch((err) => console.log(err));
//   };
// };

const getStudents = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { studentId } = req.params;
      const result = await StudentServices.getSingleStudentFromDb(studentId);
      res.status(200).json({
        statusCode: 200,
        success: true,
        message: "Student is retrieved succesfully",
        data: result
      });
    } catch (error) {
      console.log(error);
    }
  }
);
const postStudents = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { studentData } = req.body;
      const result = await StudentServices.createStudent(studentData);
      res.status(200).json({
        statusCode: 200,
        success: true,
        message: "Student Dat is  created succesfully",
        data: result
      });
    } catch (error) {
      console.log(error);
    }
  }
);

const getAllStudents = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await StudentServices.getAllStudentsFromDb();
      res.status(200).json({
        statusCode: 200,
        success: true,
        message: "All Student is retrieved succesfully",
        data: result
      });
    } catch (err) {
      next(err);
    }
  }
);

const deleteStudent = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { studentId } = req.params;
      const result = await StudentServices.deleteDataFromDb(studentId);
      res.status(200).json({
        statusCode: 200,
        success: true,
        message: "Student is Deleted succesfully",
        data: result
      });
    } catch (err) {
      next(err);
    }
  }
);

export const studentController = {
  getStudents,
  getAllStudents,
  deleteStudent,
  postStudents
};
