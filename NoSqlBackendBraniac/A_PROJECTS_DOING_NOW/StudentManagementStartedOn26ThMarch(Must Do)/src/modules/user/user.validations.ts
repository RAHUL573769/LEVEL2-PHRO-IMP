import z from "zod";
const userSchema = z.object({
  //   id: z.string(),  auto generated
  password: z
    .string({
      invalid_type_error: "Paswoword Must be string"
    })
    .max(20, { message: "Password Caanot be More than 20 characters" })
    .optional(),
  needsPasswordChange: z.boolean().optional(),
  role: z.enum(["admin", "student", "faculty"]),
  isDeleted: z.boolean().default(false),
  status: z.enum(["in-progress", "blocked"])
});

export const UserValidation = { userSchema };
