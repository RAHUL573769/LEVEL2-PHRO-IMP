import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.service";

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      password,
      student: { ...studentData }
    } = req.body;
    // const { studentData } = req.body;
    console.log("12", studentData);
    // console.log(req.body);
    const result = await UserServices.createStudentIntoDb(
      password,
      studentData
    );
    res.status(200).json({
      message: "Data Student is crested "
    });
  } catch (error) {
    console.log(error);
  }
};
export const UserController = {
  createStudent
};
