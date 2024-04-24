import express from "express";
import { AcademicSemesterControllers } from "./academicSemester.controller";
import { validateUser } from "../middlewares/validate.middlewares";
import { AcademicSemesterValidation } from "./academicSemester.validation";

const router = express.Router();

router.post(
  "/create-semester",
  validateUser(AcademicSemesterValidation.createAcademicSemesterValidation),
  AcademicSemesterControllers.createAcademicSemester
);
export const AcademicSemesterRoute = router;
