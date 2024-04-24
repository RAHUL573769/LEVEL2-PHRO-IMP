import { z } from "zod";
import { UserRole } from "./user.model";
const userValidationSchema = z.object({
  body: z.object({
    // id: z.string().optional(),
    password: z
      .string()
      .max(20, { message: "Password Cannot be mire than 20 Characters Long" })
      .optional(),
    needsPasswordChange: z.boolean().optional(),
    //   role: z.enum(["admin", "faculty", "student"]),
    //   status: z.enum(["blocked", "in-progress"]),
    isDeleted: z.boolean().optional()
  })
});
export const UserValidations = {
  userValidationSchema
};
