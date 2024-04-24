import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../helpers/catchAsyncHelpers";
import { AuthServices } from "./auth.services";
import { sendResponse } from "../helpers/successResponse";

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
      message: "Auth Logged In",
      success: true
    });
  }
);
export const AuthController = { loginUser, refreshToken };
