import z from "zod";
import {
  AcademicSemester,
  AcademicSemesterCode,
  AcademicSemesterMonth
} from "../constants/academicSemester.contsnts";

const createAcademicSemesterValidation = z.object({
  name: z.enum([...AcademicSemester] as [string, ...string[]]),
  year: z.string(),
  code: z.enum([...AcademicSemesterCode] as [string, ...string[]]),
  startMonth: z.enum([...AcademicSemesterMonth] as [string, ...string[]]),
  endMonth: z.enum([...AcademicSemesterMonth] as [string, ...string[]])
});

export const AcademicSemesterValidation = { createAcademicSemesterValidation };
