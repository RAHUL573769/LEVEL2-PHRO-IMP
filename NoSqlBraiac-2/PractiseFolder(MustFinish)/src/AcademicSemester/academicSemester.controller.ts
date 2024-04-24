import { NextFunction, Request, Response } from "express";
import { AcademicSemesterServices } from "./academicSemester.services";

const createAcademicSemester = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;

    const result = await AcademicSemesterServices.createAcademicSemester(data);

    res.status(200).json({
      message: "Academic Semester Created Succesfully",
      success: "Success",
      data: result
    });
  } catch (error) {
    next(error);
  }
};

export const AcademicSemesterControllers = { createAcademicSemester };
