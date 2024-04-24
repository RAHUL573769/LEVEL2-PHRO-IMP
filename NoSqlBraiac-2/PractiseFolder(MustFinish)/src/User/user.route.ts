import express, { NextFunction, Request, Response } from "express";
import { UserController } from "./user.controller";
import { AnyZodObject, ZodSchema } from "zod";
import { UserValidation } from "./user.validations";
import { validateUser } from "../middlewares/validate.middlewares";
import { StudentValidation } from "../Student/student.validation";
import { StudentController } from "../Student/student.controller";

const router = express.Router();

router.post(
  "/create-student",
  // validateUser(StudentValidation.createStudentValidation),
  // validateUser(StudentValidation.createStudentValidation),
  // UserController.createUser

  StudentController.createStudentIntoDb
);

export const UserRouter = router;
