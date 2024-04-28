import express, { NextFunction, Request, Response } from "express";
import { fileUploader } from "../../../helpars/fileUploader";
import { UserRole } from "@prisma/client";
import auth from "../../middlewares/auth";
import { SpecialtiesValidtaion } from "./specialitites.validation";
import { SpecialitiesController } from "./specialities.controller";

const router = express.Router();

router.post(
	"/",

	fileUploader.upload.single("file"),
	// auth(UserRole.ADMIN, UserRole.DOCTOR, UserRole.SUPER_ADMIN, UserRole.PATIENT),
	(req: Request, res: Response, next: NextFunction) => {
		req.body = SpecialtiesValidtaion.create.parse(JSON.parse(req.body.data));
		return SpecialitiesController.insertintodb(req, res, next);
	}
);
export const SpecialitiesRoutes = router;
