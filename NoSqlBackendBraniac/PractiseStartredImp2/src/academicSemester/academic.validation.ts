import { z } from "zod";

import { TAcademicSemester } from "./academic.semester";
import {
  AcademicSemesterCodes,
  AcademicSemesterMonths,
  AcademicSemesterNames
} from "./academic.semester.conts";
const academicSemesterValidation = z.object({
  body: z.object({
    name: z.enum([...AcademicSemesterNames] as [string, ...string[]]),
    year: z.number(),
    code: z.enum([...AcademicSemesterCodes] as [string, ...string[]]),

    startMonth: z.enum([...AcademicSemesterMonths] as [string, ...string[]]),
    endMonth: z.enum([...AcademicSemesterMonths] as [string, ...string[]])
  })
});
export const AcademicSemesterValidations = {
  academicSemesterValidation
};
