import { TAcademicCodeMapper } from "../Types/TAcademicMapper";
import { TAcademicSemester } from "./academicSemester.interface.";
import { AcademicSemester } from "./academicsemester.model";

const createAcademicSemester = async (academicData: TAcademicSemester) => {
  const academicSemesterCodeMapper: TAcademicCodeMapper = {
    Autumn: "01",
    Summar: "02",
    Fall: "03"
  };
  console.log("From Create AcademicSemester Services", academicData);

  if (
    academicSemesterCodeMapper[academicData.name] !==
    academicSemesterCodeMapper[academicData.code]
  ) {
    throw new Error("Invalid CODE Given");
  }
  const result = await AcademicSemester.create(academicData);
  return result;
};

export const AcademicSemesterServices = { createAcademicSemester };
//2030
