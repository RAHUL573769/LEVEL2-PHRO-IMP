import catchAsync from "../../utils/catchAsync";
import { AcademicSemesterServices } from "./academic.services";

const createAcademicFaculty = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.createAcademicFaculty(req.body);
});

const getAllAcademicFaculty = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.getAcademicFaculty();
  return result;
});

const getSingleAcademicFaculty = catchAsync(async (req, res) => {
  const { academicId } = req.params;
  const result = await AcademicSemesterServices.getSingleAcademicFaculty(
    academicId
  );
});

const updateAcademicFaculty = catchAsync(async (req, res) => {
  const { semesterId } = req.params;
  const result = await AcademicSemesterServices.updateAcademicFaculty(
    semesterId,
    req.body
  );
});

export const AcademicFacultyControllers = {
  createAcademicFaculty,
  getAllAcademicFaculty,
  getSingleAcademicFaculty,
  updateAcademicFaculty
};
