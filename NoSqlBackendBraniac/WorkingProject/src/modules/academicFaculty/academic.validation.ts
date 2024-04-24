import { z } from "zod";

const academicFacultyValidationSchema = z.object({
  body: z.object({
    name: z
      .string({ invalid_type_error: "Invalid Password" })

      .optional()
  })
});
const updateacademcFacultyValidation = z.object({
  body: z.object({
    name: z
      .string({ invalid_type_error: "Invalid Password" })

      .optional()
  })
});

export const AcademicFacultyValidationSchemas = {
  academicFacultyValidationSchema,
  updateacademcFacultyValidation
};
