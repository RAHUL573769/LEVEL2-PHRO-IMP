import { Request, RequestHandler, Response } from "express";
import { userService } from "./user.sevice";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import pick from "../../../shared/pick";
import { userFilterableFields } from "./user.constant";
import { IAuthUser } from "../../interfaces/commontypes";

const createAdmin = catchAsync(async (req: Request, res: Response) => {
	const result = await userService.createAdmin(req);
	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: "Admin Created successfuly!",
		data: result,
	});
});

const createDoctor = catchAsync(async (req: Request, res: Response) => {
	const result = await userService.createDoctor(req);
	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: "Doctor Created successfuly!",
		data: result,
	});
});

const createPatient = catchAsync(async (req: Request, res: Response) => {
	const result = await userService.createPatient(req);
	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: "Patient Created successfuly!",
		data: result,
	});
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
	// console.log(req.query)
	const filters = pick(req.query, userFilterableFields);
	const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);

	const result = await userService.getAllFromDB(filters, options);

	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: "Users data fetched!",
		meta: result.meta,
		data: result.data,
	});
});

const changeProfileStatus = catchAsync(async (req: Request, res: Response) => {
	const { id } = req.params;
	const result = await userService.changeProfileStatus(id, req.body);

	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: "Users profile status changed!",
		data: result,
	});
});
const getMyProfile = catchAsync(
	async (req: Request & { user?: IAuthUser }, res: Response) => {
		console.log(req.user);
		const result = await userService.getMyProfile(req.user);

		sendResponse(res, {
			statusCode: httpStatus.OK,
			success: true,
			message: "My Profile Data Fetched!",
			data: result,
		});
	}
);
const updateMyProfile = catchAsync(
	async (req: Request & { user?: IAuthUser }, res: Response) => {
		console.log(req.file);
		const user = req.user;
		const result = await userService.updateMyProfile(
			user as IAuthUser,
			req.body
		);
		console.log(result);
		sendResponse(res, {
			statusCode: httpStatus.OK,
			success: true,
			message: "My Profile Data Updated!",
			data: result,
		});
	}
);
export const userController = {
	createAdmin,
	createDoctor,
	createPatient,
	getAllFromDB,
	changeProfileStatus,
	updateMyProfile,
	getMyProfile,
};