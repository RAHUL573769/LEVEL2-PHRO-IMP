export type TAcademicName = "Autumn" | "Summar" | "Fall";
export type TAcademicCode = "01" | "02" | "03";
export type TMonth =
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

export const AcademicSemester: TAcademicName[] = ["Autumn", "Fall", "Summar"];
export const AcademicSemesterCode: TAcademicCode[] = ["01", "02", "03"];
export const AcademicSemesterMonth: TMonth[] = [
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

export const AcademicNameNew = {
  Autumn: "Autumn",
  Summar: "Summar",
  Fall: "Fall"
} as const;
