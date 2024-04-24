import express from "express";
import { StudentController } from "./student.controller";

const router = express.Router();

// router.post("/create-student", StudentController.createStudentIntoDb);
router.get("/get-student", StudentController.getStudentFromDb);

router.get("/get-student/:id", StudentController.getSpecificStudentsFromDb);

export const StudentRouter = router;
