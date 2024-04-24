import { z } from "zod";
import {
  StudentBloodGroup,
  StudentGender,
  createGuardianSchema,
  createLocalGuardian,
  createUserNameValidation
} from "./student.constants";

const createStudentValidation = z.object({
  body: z.object({
    password: z.string().max(20),
    student: z.object({
      name: createUserNameValidation,
      gender: z.enum([...StudentGender] as [string, ...string[]]),
      dateOfBirth: z.date(),
      email: z.string({ required_error: "Student Email is Required" }),
      contactNumber: z.number(),
      emergencyContactNumber: z.number({
        required_error: "Emergency Contact is Number"
      }),
      presentAddress: z.string(),
      permanentAddress: z.string({
        required_error: "Student Permanent Address is Needed"
      }),
      bloodGroup: z.enum([...StudentBloodGroup] as [string, ...string[]]),
      guardianName: createGuardianSchema,
      localGuardianName: createLocalGuardian,
      profileImage: z.string(),
      academicDepartment: z.string(),
      academicSemester: z.string()
    })
  })
});

export const StudentValidation = { createStudentValidation };
