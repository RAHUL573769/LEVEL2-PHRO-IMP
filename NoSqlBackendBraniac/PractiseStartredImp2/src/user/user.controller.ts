import { NextFunction, Request, RequestHandler, Response } from "express";
import { UserServices } from "./user.services";
import { Student } from "./../student/student.model";

const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => console.log(err));
  };
};

const createStudent: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    try {
      const { password, student: studentData } = req.body;
      console.log("15", req.body);

      const result = await UserServices.createStudentIntoDb(
        password,
        studentData
      );

      console.log("22", result);
      res.status(202).json({
        message: "User Data Added Successfully",
        success: true,
        data: result
      });
    } catch (error) {
      console.log(error);
    }
  }
);

export const UserController = {
  createStudent
};
