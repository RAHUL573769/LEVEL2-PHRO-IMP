import express, { NextFunction, Request, Response } from "express";
import { UserController } from "./user.controller";
import { AnyZodObject } from "zod";
import { UserValidations } from "./user.validation";
// import { StudentController } from "./user.controller";

const router = express.Router();
const validateUser = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const zodParsedData = await schema.parseAsync({
        body: req.body
      });
      next();
    } catch (error) {
      console.log(error);
    }
  };
};

router.post(
  "/create-student",
  validateUser(UserValidations.userValidationSchema),
  UserController.createStudent
);

export const UserRoute = router;
