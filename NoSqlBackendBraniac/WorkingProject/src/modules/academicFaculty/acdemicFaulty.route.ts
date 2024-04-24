import express, { NextFunction, Request, Response } from "express";
// import validateRequest from '../../middlewares/validateRequest';

import { AnyZodObject } from "zod";
import { AcademicFacultyValidationSchemas } from "./academic.validation";
import { AcademicFacultyControllers } from "./acadmic.controller";

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
  "/create-academic-faculty",
  validateRequest(
    AcademicFacultyValidationSchemas.academicFacultyValidationSchema
  ),
  AcademicFacultyControllers.createAcademicFaculty
);

router.get("/", AcademicFacultyControllers.getAllAcademicFaculty);
router.get("/:semesterId", AcademicFacultyControllers.getSingleAcademicFaculty);

router.patch(
  "/:semesterId",
  validateRequest(
    AcademicFacultyValidationSchemas.updateacademcFacultyValidation
  ),
  AcademicFacultyControllers.updateAcademicFaculty
);

export const AcademicFacultyRoutes = router;
