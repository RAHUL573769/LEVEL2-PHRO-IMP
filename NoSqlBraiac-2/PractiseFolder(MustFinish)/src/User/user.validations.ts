import z from "zod";
import { UserRole } from "./userConstants";

const createUserValidation = z.object({
  body: z.object({
    // id: z.string({ invalid_type_error: "Id Must Be String Not Number" }),
    password: z.string({ invalid_type_error: "Password must be string" })
    // needsPasswordChange: z.boolean(),
    // role: z.enum(["admin", "faculty", "student"]),
    // status: z.enum(["blocked", "in-progress"])
  })
});

export const UserValidation = { createUserValidation };
