import { z } from "zod";
const RoleEnum = z.enum(["admin", "user", "guest"]);
const StatusEnum = z.enum(["in-progress", "completed", "cancelled"]);
const userValidationSchema = z.object({
  // id: z.number(),
  password: z.string().optional(),
  // needsPasswordChange: z.boolean().default(true),
  // role: RoleEnum,
  status: StatusEnum.default("in-progress"),
  isDeleted: z.boolean().default(false)
});

export const UserValidation = {
  userValidationSchema
};
