import { AcademicFaculty } from "./academic.model";
import { TAcademicFaculty } from "./academicFaculty.interface";

const createAcademicFaculty = async (payLoad: TAcademicFaculty) => {
  const result = await AcademicFaculty.create(payLoad);
  return result;
};
const getAcademicFaculty = async () => {
  const result = await AcademicFaculty.find();
  return result;
};
const getSingleAcademicFaculty = async (id: string) => {
  const result = await AcademicFaculty.findById(id);
  return result;
};
const updateAcademicFaculty = async (id: string, payload: TAcademicFaculty) => {
  const result = await AcademicFaculty.findOneAndUpdate({ _id: id }, payload, {
    new: true
  });
  return result;
};
export const AcademicSemesterServices = {
  createAcademicFaculty,
  getAcademicFaculty,
  getSingleAcademicFaculty,
  updateAcademicFaculty
};
