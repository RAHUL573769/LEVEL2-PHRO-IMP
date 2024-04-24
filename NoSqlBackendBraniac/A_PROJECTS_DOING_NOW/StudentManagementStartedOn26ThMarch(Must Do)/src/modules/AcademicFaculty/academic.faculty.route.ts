import { validateMiddleWare } from "../../middlewares/validateMiddleware";
import { AcademicFacultyControllers } from "./academic.faculty.controller";
import { AcademicFacultyValidation } from "./academic.faculty.validation";
import express from "express";

const router = express.Router();

router.post(
  "/create-academic-faculty",
  // validateMiddleWare(AcademicFacultyValidation.createAcademicFacultyValidation),
  AcademicFacultyControllers.createAcademicFaculty
);
router.get("/", AcademicFacultyControllers.getAllAcademicFaculty);

router.patch(
  "/:semesterIdId",
  AcademicFacultyControllers.updateAcademicFaculty
);

router.get("/:id", AcademicFacultyControllers.getSingleAcademicFaculty);

export const AcademicFacultyRoutes = router;
