import { Request, Response } from "express";
import { DoctorServices } from "./Doctor.service";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const updateintoDb = catchAsync(async (req: Request, res: Response) => {
	const { id } = req.params;
	const data = await DoctorServices.updateIntoDb(id, req.body);
	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: "Doctor PROFILE changed!",
		data: data,
	});
});

export const DoctorController = { updateintoDb };
