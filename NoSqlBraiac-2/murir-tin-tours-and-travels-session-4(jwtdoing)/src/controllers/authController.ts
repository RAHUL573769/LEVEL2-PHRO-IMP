/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express'
import { authServices } from '../services/auth.service'
import sendSuccessResponse from '../utils/sendResponse'
import catchAsyncFunction from '../utils/catchAsync'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const register = catchAsyncFunction(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await authServices.register(req.body)
    sendSuccessResponse(res, {
      statusCode: 200,
      data: result,
      message: 'User Registerd Succesfullly',
    })
  },
)

interface ILogin {
  email: string
  password: string
}
const login = catchAsyncFunction(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await authServices.login(req.body)
    sendSuccessResponse(res, {
      statusCode: 200,
      data: result,
      message: 'User Logged In Succesfullly',
    })
  },
)

export const authController = {
  register,
  login,
}
