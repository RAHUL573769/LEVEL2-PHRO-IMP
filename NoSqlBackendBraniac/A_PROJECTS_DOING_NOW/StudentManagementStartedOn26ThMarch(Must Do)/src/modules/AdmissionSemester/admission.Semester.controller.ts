import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { successResponse1 } from "../../utils/sendRespons";
import httpStatus from "http-status";
import { AcademicSemesterServices } from "./admission.Semester.services";

const createAcademicSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await AcademicSemesterServices.createAcademicSemesterintoDb(
      req.body
    );
    successResponse1(res, {
      message: "AcademicSemester Created Successfully",
      statusCode: 202,
      data: result,
      status: "Success"
    });
  }
);

const getAllAcademicSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await AcademicSemesterServices.getAllAcademicSemester();
    successResponse1(res, {
      message: "AcademicSemester Fetched Successfully",
      statusCode: httpStatus.OK,
      data: result,
      status: "Success"
    });
  }
);

const getSingleAcademicSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const result = await AcademicSemesterServices.getSingleAcademicSemester(id);
    successResponse1(res, {
      message: "Single AcademicSemester Fetched Successfully",
      statusCode: httpStatus.OK,
      data: result,
      status: "Success"
    });
  }
);

const updateAcademicSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const result = await AcademicSemesterServices.updateAcademicSemester(
      id,
      req.body
    );

    successResponse1(res, {
      message: " AcademicSemester Updated Successfully",
      statusCode: httpStatus.OK,
      data: result,
      status: "Success"
    });
  }
);

export const AcademicSemesterControllers = {
  createAcademicSemester,
  getAllAcademicSemester,
  getSingleAcademicSemester,
  updateAcademicSemester
};
