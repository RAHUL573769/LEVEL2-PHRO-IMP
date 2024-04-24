import express from "express";
import { studentController } from "./student.controller";

const router = express.Router();

router.get("/", studentController.getAllStudents);
router.get("/:studentId", studentController.getStudents);
router.post("/post", studentController.postStudents);
router.delete("/:studentId", studentController.deleteStudent);
export const StudentRoutes = router;
