import { Request, Response } from "express";
import { catchAsync } from "../utils/catchAsync";
import { AcademicSemesterServices } from "./academi.semester.service";

const getAllAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    try {
      // console.log("15", studentData);

      const result = await AcademicSemesterServices.getAcademicSemesterFromDb();
      console.log("22", result);
      res.status(202).json({
        message: "Academic Semester Data Fetched Successfully",
        success: true,
        data: result
      });
    } catch (error) {
      console.log(error);
    }
  }
);
const createAllAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    try {
      // console.log("15", studentData);
      const data = req.body;
      const result =
        await AcademicSemesterServices.createAcademicSemesterFromDb(data);
      console.log("22", result);
      res.status(202).json({
        message: "Academic Semester Created Successfully",
        success: true,
        data: result
      });
    } catch (error) {
      console.log(error);
    }
  }
);

const getSingleAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    try {
      // console.log("15", studentData);
      const { id } = req.params;
      const result =
        await AcademicSemesterServices.getSingleAcademicSemesterInfo(id);
      console.log("22", result);
      res.status(202).json({
        message: "Single AcademicSemester Data Fetched Successfully",
        success: true,
        data: result
      });
    } catch (error) {
      console.log(error);
    }
  }
);

const updateAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    try {
      // console.log("15", studentData);
      const id = req.params.id;
      const data = req.body;
      const result =
        await AcademicSemesterServices.updateAcademicSemesterInfoInDb(id, data);
      console.log("22", result);
      res.status(202).json({
        message: "AcademicSemester Updated Succesfully",
        success: true,
        data: result
      });
    } catch (error) {
      console.log(error);
    }
  }
);

export const AcademicSemesterController = {
  getAllAcademicSemester,
  getSingleAcademicSemester,
  updateAcademicSemester,
  createAllAcademicSemester
};
