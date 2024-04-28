import express, { NextFunction, Request, Response } from "express";
import { DoctorController } from "./Doctor.controller";

const router = express.Router();
router.patch(
	"/:id",
	// fileUploader.upload.single("file"),
	// auth(UserRole.ADMIN, UserRole.DOCTOR, UserRole.SUPER_ADMIN, UserRole.PATIENT),
	DoctorController.updateintoDb
);

export const doctorRoutes = router;
