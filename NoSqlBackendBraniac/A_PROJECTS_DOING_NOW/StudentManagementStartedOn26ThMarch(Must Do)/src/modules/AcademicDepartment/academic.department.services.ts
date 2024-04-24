import { TAcademicDepartment } from "./academic.department.interface";
import { AcademicDepartment } from "./academic.department.model";

const createAcademicDepartment = async (payload: TAcademicDepartment) => {
  //   const isAcademicDepartmentExists = await AcademicDepartment.findOne({
  //     name: payload.name
  //   });

  //   if (isAcademicDepartmentExists) {
  //     throw new Error("Academic Ddeaprtment Exists");
  //   }  ===>One way to handle error
  const result = await AcademicDepartment.create(payload);
  return result;
};

const getAcademicDepartment = async () => {
  const result = await AcademicDepartment.find().populate("academicFaculty"); //here academicFaculty valus is property name
  return result;
};
const getSingleAcademicDepartment = async (id: string) => {
  const result = await AcademicDepartment.findById(id);

  return result;
};

const updateAcademicDepartment = async (
  id: string,
  payload: Partial<TAcademicDepartment>
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
  getSingleAcademicDepartment,
  updateAcademicDepartment
};
