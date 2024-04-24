import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { AcademicDepartmentServices } from "./academic.department.services";
import { successResponse1 } from "../../utils/sendRespons";
import httpStatus from "http-status";

const createAcademicDepartment = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await AcademicDepartmentServices.createAcademicDepartment(
      req.body
    );
    successResponse1(res, {
      message: "AcademicDepartment Created Successfully",
      statusCode: httpStatus.CREATED,
      data: result,
      status: "Success"
    });
  }
);

const getAllAcademicDepartment = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await AcademicDepartmentServices.getAcademicDepartment();
    successResponse1(res, {
      message: "AcademicDepartment Fetched Successfully",
      statusCode: httpStatus.OK,
      data: result,
      status: "Success"
    });
  }
);

const getSingleAcademicDepartment = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const result = await AcademicDepartmentServices.getSingleAcademicDepartment(
      id
    );
    successResponse1(res, {
      message: "Single AcademicDepartment Fetched Successfully",
      statusCode: httpStatus.OK,
      data: result,
      status: "Success"
    });
  }
);

const updateAcademicDepartment = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.departmentIdId;
    // console.log("id", req.params);
    const result = await AcademicDepartmentServices.updateAcademicDepartment(
      id,
      req.body
    );

    successResponse1(res, {
      message: " Academic Department Updated Successfully",
      statusCode: httpStatus.OK,
      data: result,
      status: "Success"
    });
  }
);

export const AcademicDepartmentControllers = {
  getAllAcademicDepartment,
  createAcademicDepartment,
  getSingleAcademicDepartment,
  updateAcademicDepartment
};
