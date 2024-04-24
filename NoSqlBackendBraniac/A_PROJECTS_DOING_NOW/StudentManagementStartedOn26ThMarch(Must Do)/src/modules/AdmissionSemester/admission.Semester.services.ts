import { TAcademicSemester } from "./admission.Semester.interface";
import { AcademicSemester } from "./admission.Semester.model";

const createAcademicSemesterintoDb = async (payload: TAcademicSemester) => {
  //semester name====>semster code

  type TAcademicSemesterNameCodeMapper = {
    [key: string]: string;
  };
  const academicSemesterNameCodeMapper: TAcademicSemesterNameCodeMapper = {
    Autumn: "01",
    Summar: "02",
    Fall: "03"
  };

  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error("Invalid Semester Code");
  }

  const result = await AcademicSemester.create(payload);
  return result;
};

const getAllAcademicSemester = async () => {
  const result = await AcademicSemester.find();
  return result;
};
const getSingleAcademicSemester = async (id: string) => {
  const result = await AcademicSemester.findById(id);
  return result;
};
const updateAcademicSemester = async (
  id: string,
  payload: Partial<TAcademicSemester>
) => {
  const result = await AcademicSemester.findOneAndUpdate({ _id: id }, payload, {
    new: true
  });
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterintoDb,
  getSingleAcademicSemester,
  getAllAcademicSemester,
  updateAcademicSemester
};
