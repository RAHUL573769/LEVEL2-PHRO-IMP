import { Schema } from "mongoose";
import { z } from "zod";

export type studentGender = "male" | "female" | "others";
export type studentBloodGroup = "A+" | "A-" | "B+";
export type studentGuardian = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type studentLocalGuardian = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type studentName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

// --------------------From Model-----------

export const studentNameSchema = new Schema<studentName>({
  firstName: {
    type: String,
    required: [true, "Student First Name is Required"]
  },
  middleName: {
    type: String
  },
  lastName: {
    type: String,
    required: [true, "Student Last Name is Required"]
  }
});
export const localGuardianName = new Schema<studentLocalGuardian>({
  firstName: {
    type: String,
    required: [true, "Student's Local  First Name is Required"]
  },
  middleName: {
    type: String
  },
  lastName: {
    type: String,
    required: [true, "Student's Local Last Name is Required"]
  }
});

export const guardianName = new Schema<studentGuardian>({
  firstName: {
    type: String,
    required: [true, "Student's Guardian  First Name is Required"]
  },
  middleName: {
    type: String
  },
  lastName: {
    type: String,
    required: [true, "Student's  Guardian Last Name is Required"]
  }
});

export const StudentBloodGroup: studentBloodGroup[] = ["A+", "A-", "B+"];
export const StudentGender: studentGender[] = ["female", "male", "others"];

//---------------------------Settings constants as key vale pairs

export const USER_GENDER = {
  male: "male",
  female: "female,"
} as const;

// ----------------------------------From Student Validation-----------
export const createUserNameValidation = z.object({
  firstName: z
    .string()
    .min(1)
    .max(20)
    .refine((value) => /^[A-Z]/.test(value), {
      message: "Student's First Name Must be Capitalized"
    }),
  middleName: z.string(),
  lastName: z.string()
});

export const createLocalGuardian = z.object({
  firstName: z
    .string()
    .min(1)
    .max(20)
    .refine((value) => /^[A-Z]/.test(value), {
      message: "Local Guardian's First Name Must be Capitalized"
    }),
  middleName: z.string(),
  lastName: z.string()
});

export const createGuardianSchema = z.object({
  firstName: z
    .string()
    .min(1)
    .max(20)
    .refine((value) => /^[A-Z]/.test(value), {
      message: "Guardian 's Name Must be Capitalized"
    }),
  middleName: z.string(),
  lastName: z.string()
});
