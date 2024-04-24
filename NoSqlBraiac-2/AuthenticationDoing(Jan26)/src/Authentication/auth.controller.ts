/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'
import { authServices } from './auth..service'
import sendSuccessResponse from '../utils/sendResponse'
import catchAsyncFunction from '../utils/catchAsync'
import { JwtPayload } from 'jsonwebtoken'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const register = catchAsyncFunction(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await authServices.doRegister(req.body)

    sendSuccessResponse(res, {
      statusCode: 200,
      data: result,
      message: 'User Registered',
    })
  },
)

const login = catchAsyncFunction(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await authServices.doLogin(req.body)

    sendSuccessResponse(res, {
      statusCode: 200,
      data: result,
      message: 'User Looged In Succsfullly',
    })
  },
)
const changePassword = catchAsyncFunction(
  async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.headers)
    const decodedToken = req.decoded
    console.log(decodedToken)
    const result = await authServices.doChangePassword(decodedToken, req.body)

    sendSuccessResponse(res, {
      statusCode: 200,
      data: result,
      message: 'User Registered',
    })
  },
)
export const authController = {
  register,
  login,
  changePassword,
}
