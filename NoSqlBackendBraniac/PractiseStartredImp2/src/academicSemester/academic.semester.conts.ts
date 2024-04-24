import { TAcademicSemesterNameMapper } from "./academic.semester";

export type AcademicSemesterName = "Autumn" | "Summer" | "Fall";
export type AcademicSemesterCode = "01" | "02" | "03";
export type AcademicSemesterMonth =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";
export const AcademicSemesterNames: AcademicSemesterName[] = [
  "Autumn",
  "Fall",
  "Summer"
];
export const AcademicSemesterCodes: AcademicSemesterCode[] = ["01", "02", "03"];
export const AcademicSemesterMonths: AcademicSemesterMonth[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
export const academicSemesterNameCodeMapper: TAcademicSemesterNameMapper = {
  Autumn: "01",
  Summer: "02",
  Fall: "03"
};
