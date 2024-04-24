import express from "express";
import { AcademicSemesterControllers } from "./admission.Semester.controller";
import { validateMiddleWare } from "../../middlewares/validateMiddleware";
import { AcademicSemesterValidation } from "./admission.Semester.validation";

const router = express.Router();

router.post(
  "/create-academic-semester",
  // validateMiddleWare(
  //   AcademicSemesterValidation.createAcademicSemesterValidation
  // ),
  AcademicSemesterControllers.createAcademicSemester
);
router.get("/", AcademicSemesterControllers.getAllAcademicSemester);

router.patch(
  "/:semesterIdId",
  AcademicSemesterControllers.updateAcademicSemester
);

router.get("/:id", AcademicSemesterControllers.getSingleAcademicSemester);

export const AcademicSemesterRoutes = router;
