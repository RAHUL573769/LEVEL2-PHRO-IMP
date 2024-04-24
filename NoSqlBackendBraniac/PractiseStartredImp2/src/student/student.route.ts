import express from "express";
import { StudentController } from "./student.controller";
// import { UserController } from "./user.controller";
// import { StudentController } from "./user.controller";

const router = express.Router();

router.get("", StudentController.getAllStudent);
router.get("/get-single-student/:id", StudentController.getSingleStudent);
router.patch("/update-single-student/:id", StudentController.updateStudent);

export const StudentRoute = router;
