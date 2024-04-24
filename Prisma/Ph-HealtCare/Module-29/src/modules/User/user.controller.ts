import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.service";
import { sendResponse } from "../../helpers/successResponse";
import { catchAsync } from "../../helpers/catchAsyncHelpers";

const createAdminController = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await UserService.createAdmin(req.body);
    console.log("Result", result);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: " data Crested Fetched",
      data: result
    });
    // res.status(200).json({
    //   success: true,
    //   data: result,
    //   message: "Admin Created Succesfully"
    // });
  }
);

export const UserController = { createAdminController };
