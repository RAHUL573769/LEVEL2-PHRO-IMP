import { Request } from "express";
import { fileUploader } from "../../../helpars/fileUploader";
import prisma from "../../../shared/prisma";

const insertIntoDb = async (req: Request) => {
	const file = req.file;
	if (file) {
		const upladTo = await fileUploader.uploadToCloudinary(file);
		req.body.icon = upladTo?.secure_url;
	}
	const result = await prisma.specialties.create({
		data: req.body,
	});

	return result;
};

export const SpecialitiesServices = { insertIntoDb };
