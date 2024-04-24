import { NextFunction, Request, RequestHandler, Response } from "express";
import { StudentServices } from "./student.services";
import { catchAsync } from "../helperFunctions/catchAsyncFunction";
import { successResponse } from "../helperFunctions/successRespose";
import httpStatus from "http-status";

const createStudentIntoDb = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const result = await StudentServices.createStudent(data);

      console.log(typeof result);
      // res.status(200).json({
      //   message: "Student Data Send Successfully",
      //   status: "Success",
      //   data: result
      // });

      successResponse(res, {
        statusCode: httpStatus.OK,
        data: result,
        message: "Student Data is Created Successfully"
      });
    } catch (error) {
      // console.log("26", error);
      console.log("Dta Creation Failed");
      next(error);
    }
  }
);

const getStudentFromDb = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await StudentServices.getAllStudents();

      console.log(typeof result);
      res.status(200).json({
        message: "Student Data Fetched Successfully",
        status: "Success",
        data: result
      });
    } catch (error) {
      console.log("36", error);
      next(error);
    }
  }
);

const getSpecificStudentsFromDb = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      // console.log(id);
      const result = await StudentServices.getSpecificStudent(id);

      console.log("DataType of Get All Students", typeof result);
      res.status(200).json({
        message: "Specific Student Data Fetched Successfully",
        status: "Success",
        data: result
      });
    } catch (error) {
      next(error);
    }
  }
);

export const StudentController = {
  getSpecificStudentsFromDb,
  createStudentIntoDb,
  getStudentFromDb
};
