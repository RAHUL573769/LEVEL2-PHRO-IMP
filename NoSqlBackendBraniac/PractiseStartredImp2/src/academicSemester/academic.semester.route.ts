import express from "express";
import { AcademicSemesterController } from "./academic.semester.controller";
import { validateUser } from "../utils/validateUser";
import { AcademicSemesterValidations } from "./academic.validation";
const router = express.Router();

router.get(
  "/get-all-academic-semester",

  AcademicSemesterController.getAllAcademicSemester
);
router.get(
  "/get-single-academic-semester/:id",
  AcademicSemesterController.getSingleAcademicSemester
);
router.patch(
  "/update-single-academic-semester",
  AcademicSemesterController.updateAcademicSemester
);
router.post(
  "/post-single-academic-semester",
  validateUser(AcademicSemesterValidations.academicSemesterValidation),
  AcademicSemesterController.createAllAcademicSemester
);
export const AcademicSemesterRoute = router;
