import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.service";
import { sendResponse } from "../../helpers/successResponse";

const createAdminController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
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
  } catch (error) {
    next(error);
    // res.status(404).json({
    //   success: false,
    //   data: error,
    //   message: "Something Went Wrong"
    // });
  }
};

export const UserController = { createAdminController };
