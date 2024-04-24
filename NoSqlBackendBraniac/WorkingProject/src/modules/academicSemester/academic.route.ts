import express, { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import { AcademicSemesterValidations } from "./academin.validation";
import { academicController } from "./academic.controller";
// import { studentController } from "./student.controller";

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
  "/create-academic-semester",
  validateRequest(AcademicSemesterValidations.academicSemesterValidation),
  academicController.createAcademicSemester
);

// router.get("/", studentController.getAllStudents);
// router.get("/:studentId", studentController.getStudents);

// router.delete("/:studentId", studentController.deleteStudent);
export const AcademicRoutes = router;
