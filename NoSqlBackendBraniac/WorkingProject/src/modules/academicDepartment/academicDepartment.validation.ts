import { z } from "zod";

const academicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z
      .string({ invalid_type_error: "Invalid Password" })

      .optional(),
    academicFaculty: z.string({
      invalid_type_error: "Required"
    })
  })
});
const updateAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z
      .string({ invalid_type_error: "Invalid Password" })

      .optional(),
    academicFaculty: z.string({
      invalid_type_error: "Required"
    })
  })
});
export const AcademicDepartmentValidationSchemas = {
  academicDepartmentValidationSchema,
  updateAcademicDepartmentValidationSchema
};
