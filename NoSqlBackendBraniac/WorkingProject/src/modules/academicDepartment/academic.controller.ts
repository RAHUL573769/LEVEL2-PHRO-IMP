import catchAsync from "../../utils/catchAsync";
import { AcademicDepartmentServices } from "./academicDepartment.service";
// import { AcademicSemesterServices } from "./academic.services";

const createAcademicDepartment = catchAsync(async (req, res) => {
  const result = await AcademicDepartmentServices.createAcademicDepartment(
    req.body
  );

  console.log(result);
  return result;
});

const getAllAcademicDepartment = catchAsync(async (req, res) => {
  const result = await AcademicDepartmentServices.getAcademicDepartment();
  console.log(result);
  return result;
});

const getSingleAcademicDepartment = catchAsync(async (req, res) => {
  const { academicId } = req.params;
  const result = await AcademicDepartmentServices.getSingleAcademicDepartment(
    academicId
  );
});

const updateAcademicDepartment = catchAsync(async (req, res) => {
  const { semesterId } = req.params;
  const result = await AcademicDepartmentServices.updateAcademicDepartment(
    semesterId,
    req.body
  );
});

export const AcademicDepartmentControllers = {
  createAcademicDepartment,
  getSingleAcademicDepartment,
  getAllAcademicDepartment,
  updateAcademicDepartment
};
