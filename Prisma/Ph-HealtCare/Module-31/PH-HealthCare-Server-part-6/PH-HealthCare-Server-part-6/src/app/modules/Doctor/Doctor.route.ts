import express, { NextFunction, Request, Response } from "express";

const router = express.Router();
router.patch(
	"/:id",
	// fileUploader.upload.single("file"),
	// auth(UserRole.ADMIN, UserRole.DOCTOR, UserRole.SUPER_ADMIN, UserRole.PATIENT),
	DoctorController.updateintoDb
);

export const doctorRoutes = router;
