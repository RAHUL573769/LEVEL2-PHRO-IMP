import { Request, Response } from "express";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import { SpecialitiesServices } from "./specialities.service";

const insertintodb = catchAsync(async (req: Request, res: Response) => {
	const result = await SpecialitiesServices.insertIntoDb(req);

	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: "Specialities Created successfully!",
		data: result,
	});
});

export const SpecialitiesController = {
	insertintodb,
};
