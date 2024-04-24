import { NextFunction, Request, RequestHandler, Response } from "express";
import { StudentServices } from "./student.services";
import { catchAsync } from "../utils/catchAsync";

const getAllStudent = catchAsync(async (req: Request, res: Response) => {
  try {
    // console.log("15", studentData);

    const result = await StudentServices.getStudentsFromDb();
    console.log("22", result);
    res.status(202).json({
      message: "User Data FetchedSuccessfully",
      success: true,
      data: result
    });
  } catch (error) {
    console.log(error);
  }
});
const getSingleStudent = catchAsync(async (req: Request, res: Response) => {
  try {
    // console.log("15", studentData);
    const id = req.params.id;
    const result = await StudentServices.getSingleStudentInfo(id);
    console.log("22", result);
    res.status(202).json({
      message: "Single User Data FetchedSuccessfully",
      success: true,
      data: result
    });
  } catch (error) {
    console.log(error);
  }
});

const updateStudent = catchAsync(async (req: Request, res: Response) => {
  try {
    // console.log("15", studentData);
    const id = req.params.id;
    const data = req.body;
    const result = await StudentServices.updateStudentsInfoInDb(id, data);
    console.log("22", result);
    res.status(202).json({
      message: "Data Updated Succesfully",
      success: true,
      data: result
    });
  } catch (error) {
    console.log(error);
  }
});

export const StudentController = {
  getAllStudent,
  getSingleStudent,
  updateStudent
};
