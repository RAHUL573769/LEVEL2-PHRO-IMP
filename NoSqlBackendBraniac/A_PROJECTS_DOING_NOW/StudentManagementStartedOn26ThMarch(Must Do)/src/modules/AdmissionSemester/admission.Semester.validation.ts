import z from "zod";
import {
  AcademicSemesterCodes,
  AcademicSemesterName,
  Month
} from "./admission.Semester.utils";
const createAcademicSemesterValidation = z.object({
  body: z.object({
    name: z.enum([...AcademicSemesterName] as [string, ...string[]]),
    year: z.string(),

    code: z.enum([...AcademicSemesterCodes] as [string, ...string[]]),
    startMonth: z.enum([...Month] as [string, ...string[]]),
    endMonth: z.enum([...Month] as [string, ...string[]])
  })
});

export const AcademicSemesterValidation = { createAcademicSemesterValidation };
