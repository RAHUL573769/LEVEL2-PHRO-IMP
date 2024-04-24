import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.services";
import { successResponse1 } from "../../utils/sendRespons";
import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { AppError } from "../../classes/AppError";

// const catchAsync = (fn: any) => {
//   return (req: Request, res: Response, next: NextFunction) => {
//     Promise.resolve(fn(req, res, next)).catch((error) => {
//       next(error);
//     });
//   };
// };

const createStudent = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { password, student: studentData } = req.body;

    // throw new AppError("Vua Throwed", 403);
    const result = await UserService.createIntoDb(password, studentData);

    console.log("From User Controller Line 9", result);

    successResponse1(res, {
      message: "Student Data Created Successfully",
      statusCode: 202,
      data: result,
      status: "Success"
    });
  }
);

export const UserControllers = {
  createStudent
};
