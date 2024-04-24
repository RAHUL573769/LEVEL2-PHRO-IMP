// const createAcademicSemester

import catchAsync from "../../utils/catchAsync";
import { AcademicSemesterServices } from "./academic.service";

const createAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.createAcademicSemester(
    req.body
  );
  res.status(200).json({
    message: "Academic Semester created Succesfully"
  });
});

export const academicController = {
  createAcademicSemester
};
