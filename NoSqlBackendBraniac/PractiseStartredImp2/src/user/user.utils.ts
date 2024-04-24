import { TAcademicSemester } from "../academicSemester/academic.semester";

export const generateStudentId = (payload: TAcademicSemester) => {
  //first time 0000
  const currentId = (0).toString().padStart(4, "0");

  let incrementId = (Number(currentId) + 1).toString();

  incrementId = `${payload.year}${payload.code}${incrementId}`;

  return incrementId;
};
