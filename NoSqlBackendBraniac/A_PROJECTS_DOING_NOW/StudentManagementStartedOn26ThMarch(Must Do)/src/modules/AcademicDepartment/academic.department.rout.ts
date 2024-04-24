import express from "express";
import { validateMiddleWare } from "../../middlewares/validateMiddleware";
import { AcademicDepartmentControllers } from "./academic.department.controller";
import { AcademicDepartmentValidation } from "./academic.department.validation";

const router = express.Router();

router.post(
  "/create-academic-department",
  validateMiddleWare(AcademicDepartmentValidation.createAcademicValidation),
  AcademicDepartmentControllers.createAcademicDepartment
);
router.get("/", AcademicDepartmentControllers.getAllAcademicDepartment);

router.patch(
  "/:departmentIdId",
  AcademicDepartmentControllers.updateAcademicDepartment
);

router.get("/:id", AcademicDepartmentControllers.getSingleAcademicDepartment);

export const AcademicDepartmentRoutes = router;
