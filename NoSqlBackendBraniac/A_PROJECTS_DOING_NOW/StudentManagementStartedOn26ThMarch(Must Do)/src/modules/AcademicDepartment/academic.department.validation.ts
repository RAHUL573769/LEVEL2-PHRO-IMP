import z from "zod";
const createAcademicValidation = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: "Name must be String",
      required_error: "Academic Department is Required"
    }),
    academicFaculty: z.string({
      invalid_type_error: "Academic Faculty must be string",
      required_error: "Academic Faculty  is Requied"
    })
  })
});

const updateAcademicValidation = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: "Name must be String",
        required_error: "Academic Department is Required"
      })
      .optional(),
    academicFaculty: z
      .string({
        invalid_type_error: "Academic Faculty must be string",
        required_error: "Academic Faculty  is Requied"
      })
      .optional()
  })
});

export const AcademicDepartmentValidation = {
  createAcademicValidation,
  updateAcademicValidation
};
