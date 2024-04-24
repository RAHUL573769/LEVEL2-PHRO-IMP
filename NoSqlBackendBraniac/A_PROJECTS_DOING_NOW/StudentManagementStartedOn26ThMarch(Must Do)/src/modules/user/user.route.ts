import express, { NextFunction, Request, Response } from "express";
import { UserControllers } from "./user.controller";
import { ZodSchema } from "zod";
import { UserValidation } from "./user.validations";
import { validateMiddleWare } from "../../middlewares/validateMiddleware";
import { StudentValidations } from "../student/student.validations";
const router = express.Router();

// const validateMiddleWare = (schema: ZodSchema) => {
//   return async (req: Request, res: Response, next: NextFunction) => {
//     validations

//     try {
//       const zodParsedData = await schema.parseAsync(req.body);
//     } catch (error) {
//       next(error);
//       console.log(error);
//     }
//   };
// };

router.post(
  "/create-student", // validateMiddleWare(UserValidation.userSchema),
  // validateMiddleWare(StudentValidations.createStudentValidation),
  UserControllers.createStudent
);

export const UserRoute = router;
