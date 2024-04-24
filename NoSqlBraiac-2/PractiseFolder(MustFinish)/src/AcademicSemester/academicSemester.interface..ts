import {
  TAcademicCode,
  TAcademicName,
  TMonth
} from "../constants/academicSemester.contsnts";

export type TAcademicSemester = {
  name: TAcademicName;
  code: TAcademicCode;
  year: string;
  startMonth: TMonth;
  endMonth: TMonth;
};
