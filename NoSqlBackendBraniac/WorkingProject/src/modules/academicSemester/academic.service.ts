import { AcademicSemesterModel } from "./academic.model";
import { AcademicSemester, TAcademicSemesterCode } from "./acaemic.semester";

const createAcademicSemester = async (payLoad: AcademicSemester) => {
  type TAcademicSemesterNameCodeMapper = {
    [key: string]: string;
  };

  const academicSemesterCodeMapper: TAcademicSemesterNameCodeMapper = {
    Autumn: "01",
    Summer: "02",
    Fall: "03"
  };

  if (academicSemesterCodeMapper[payLoad.name] !== payLoad.code) {
    throw new Error("There is error in Code");
  }

  const result = await AcademicSemesterModel.create(payLoad);
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemester
};
