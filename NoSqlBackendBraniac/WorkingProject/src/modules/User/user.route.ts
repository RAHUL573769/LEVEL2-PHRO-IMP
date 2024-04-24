import express, { NextFunction, Request, Response } from "express";
import { UserController } from "./user.controller";
import { AnyZodObject } from "zod";
import { studentValidationSchemas } from "../Student/student.validation";
const router = express.Router();

const validateRequest = (scheme: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await scheme.parseAsync({
        body: req.body
      });
      return next();
    } catch (error) {
      console.log(error);
    }
  };
};

router.post(
  "/create-student",
  validateRequest(studentValidationSchemas.studentValidationSchema),
  UserController.createStudent
);
export const UserRoute = router;
