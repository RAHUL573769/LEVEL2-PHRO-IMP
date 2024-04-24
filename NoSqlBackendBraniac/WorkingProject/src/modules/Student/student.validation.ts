import { z } from "zod";

const userNameSchema = z.object({
  firstName: z.string(),
  middleName: z.string(),
  lastName: z.string()
});

const guardianSchema = z.object({
  firstName: z.string(),
  middleName: z.string(),
  lastName: z.string()
});
const localGuardianSchema = z.object({
  firstName: z.string(),
  middleName: z.string(),
  lastName: z.string()
});
const studentValidationSchema = z.object({
  body: z.object({
    id: z.string(),
    password: z.string(),
    student: z.object({
      name: userNameSchema,
      gender: z.enum(["male", "female"]),
      dateOfBirth: z.string(),
      email: z.string(),
      contactNumber: z.string(),
      emergencyContactNumber: z.string(),
      bloodGroup: z.string(),
      presentAddress: z.string(),
      permanentAddress: z.string(),
      guardian: guardianSchema,
      localGuardian: localGuardianSchema,
      academicSemester: z.string(),
      profileImage: z.string(),
      isDeleted: z.boolean()
    })
  })
});

export const studentValidationSchemas = {
  studentValidationSchema
};
