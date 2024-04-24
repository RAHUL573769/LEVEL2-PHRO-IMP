import { NextFunction, Request, Response } from "express";
import { userServices } from "./user.service";

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { password, student: studentData } = req.body;
    const result = await userServices.createIntoDb(password, studentData);

    res.status(200).json({
      message: "Data Added",
      data: result
    });
  } catch (error) {
    console.log(error);
  }
};

export const UserController = {
  createStudent
};
