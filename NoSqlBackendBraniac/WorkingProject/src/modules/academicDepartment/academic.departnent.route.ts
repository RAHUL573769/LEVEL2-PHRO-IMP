import express, { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import { AcademicDepartmentValidationSchemas } from "./academicDepartment.validation";
import { AcademicDepartmentControllers } from "./academic.controller";
// import validateRequest from '../../middlewares/validateRequest';

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
  "/create-academic-department",
  validateRequest(
    AcademicDepartmentValidationSchemas.academicDepartmentValidationSchema
  ),
  AcademicDepartmentControllers.createAcademicDepartment
);

router.get("/", AcademicDepartmentControllers.getAllAcademicDepartment);
router.get(
  "/:semesterId",
  AcademicDepartmentControllers.getSingleAcademicDepartment
);

router.patch(
  "/:semesterId",
  validateRequest(
    AcademicDepartmentValidationSchemas.updateAcademicDepartmentValidationSchema
  ),
  AcademicDepartmentControllers.updateAcademicDepartment
);

export const AcademicDepartmentRoutes = router;
