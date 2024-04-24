import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { AcademicFaculty } from "./academic.faculty.model";
import { AcademicSemesterFacultyServices } from "./academic.faculty.services";
import { successResponse1 } from "../../utils/sendRespons";
import httpStatus from "http-status";

const createAcademicFaculty = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result =
      await AcademicSemesterFacultyServices.createAcademicFacultyintoDb(
        req.body
      );
    successResponse1(res, {
      message: "Academic Faculty Created Successfully",
      statusCode: httpStatus.CREATED,
      data: result,
      status: "Success"
    });
  }
);

const getAllAcademicFaculty = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result =
      await AcademicSemesterFacultyServices.getAllAcademicFaculty();
    successResponse1(res, {
      message: "Academic Faculty Fetched Successfully",
      statusCode: httpStatus.OK,
      data: result,
      status: "Success"
    });
  }
);

const getSingleAcademicFaculty = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const result =
      await AcademicSemesterFacultyServices.getSingleAcademicFaculty(id);
    successResponse1(res, {
      message: "Single Academic Faculty Fetched Successfully",
      statusCode: httpStatus.OK,
      data: result,
      status: "Success"
    });
  }
);

const updateAcademicFaculty = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const result = await AcademicSemesterFacultyServices.updateAcademicFaculty(
      id,
      req.body
    );

    successResponse1(res, {
      message: " Academic Faculty Updated Successfully",
      statusCode: httpStatus.OK,
      data: result,
      status: "Success"
    });
  }
);

export const AcademicFacultyControllers = {
  createAcademicFaculty,
  getSingleAcademicFaculty,
  getAllAcademicFaculty,
  updateAcademicFaculty
};
