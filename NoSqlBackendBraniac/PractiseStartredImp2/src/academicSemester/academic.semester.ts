import {
  AcademicSemesterCode,
  AcademicSemesterMonth,
  AcademicSemesterName
} from "./academic.semester.conts";

export type TAcademicSemester = {
  name: AcademicSemesterName;
  code: AcademicSemesterCode;
  year: Number;
  startMonth: AcademicSemesterMonth;
  endMonth: AcademicSemesterMonth;
};

export type TAcademicSemesterNameMapper = {
  [key: string]: string;
};
