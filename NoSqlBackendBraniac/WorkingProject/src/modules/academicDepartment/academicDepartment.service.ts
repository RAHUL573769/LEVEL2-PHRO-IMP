import { TAcademicDepartment } from "./academicDepartment.interface";
import { AcademicDepartment } from "./academicDepartment.model";

const createAcademicDepartment = async (payLoad: TAcademicDepartment) => {
  // const isDepartmentExists = await AcademicDepartment.findOne({
  //   name: payLoad.name
  // });

  // if (isDepartmentExists) {
  //   throw new Error("This department always exists");
  // }

  const result = await AcademicDepartment.create(payLoad);
  return result;
};
const getAcademicDepartment = async () => {
  const result = await AcademicDepartment.find().populate("academicFaculty");
  return result;
};
const getSingleAcademicDepartment = async (id: string) => {
  const result = await AcademicDepartment.findById(id).populate(
    "academicFaculty"
  );
  return result;
};
const updateAcademicDepartment = async (
  id: string,
  payload: TAcademicDepartment
) => {
  const result = await AcademicDepartment.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true
    }
  );
  return result;
};
export const AcademicDepartmentServices = {
  createAcademicDepartment,
  getAcademicDepartment,
  updateAcademicDepartment,
  getSingleAcademicDepartment
};
