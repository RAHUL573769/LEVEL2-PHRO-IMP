import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../helpers/catchAsyncHelpers";
import { AuthServices } from "./auth.services";
import { sendResponse } from "../../helpers/successResponse";
import { any } from "zod";

const loginUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await AuthServices.loginUser(req.body);
    // console.log("Result", result);

    const { refreshToken } = result;
    res.cookie("refreshToken", refreshToken, { httpOnly: true, secure: false });
    sendResponse(res, {
      statusCode: 202,
      data: {
        accessToken: result.token,
        needsPasswordChange: result.needsPasswordChange
      },

      // data: result,
      message: "Auth Logged In",
      success: true
    });
  }
);
const refreshToken = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { refreshToken } = req.cookies;
    const result = await AuthServices.refreshToken(refreshToken);
    // console.log("Result", result);

    sendResponse(res, {
      statusCode: 202,
      data: result,
      // data: {
      //   accessToken: result.token,
      //   needsPasswordChange: result.needsPasswordChange
      // },

      // data: result,
      message: "Access Tokn Generated Succesfully",
      success: true
    });
  }
);

const changePasswordController = catchAsync(
  async (req: Request & { user?: any }, res: Response, next: NextFunction) => {
    // console.log("49", req.user, req.body);
    const user = req.user;
    const result = await AuthServices.changePassword(user, req.body);
    // console.log("Result", result);

    sendResponse(res, {
      statusCode: 202,
      data: result,
      // data: {
      //   accessToken: result.token,
      //   needsPasswordChange: result.needsPasswordChange
      // },

      // data: result,
      message: "Password Change DONE",
      success: true
    });
  }
);

const forgotPasswordController = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // console.log("49", req.user, req.body);
    const email = req.body;
    const result = await AuthServices.forgotPassword(email);
    // console.log("Result", result);

    sendResponse(res, {
      statusCode: 202,
      data: result,
      // data: {
      //   accessToken: result.token,
      //   needsPasswordChange: result.needsPasswordChange
      // },

      // data: result,
      message: "Forgot Password Change DONE",
      success: true
    });
  }
);

export const AuthController = {
  loginUser,
  refreshToken,
  changePasswordController,
  forgotPasswordController
};
