/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express'
import { authServices } from './auth.service'
import catchAsyncFunction from '../utils/catchAsync'
import sendSuccessResponse from '../utils/sendResponse'
import config from '../config'
// import catchAsyncFunction from '../utils/catchAsync'
// import { *asargon2 } from 'argon2';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const login = catchAsyncFunction(
//   async (req: Request, res: Response, next: NextFunction) => {},
// )
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const register = async (req: Request, res: Response, next: NextFunction) => {
  const result = await authServices.register(req.body)
  res.status(200).json({
    message: 'User Registered Succesfully',
    data: result,
  })
}
const login = catchAsyncFunction(async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { token, refreshToken } = await authServices.login(req.body)
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: config.node_env === 'production',
  })
  sendSuccessResponse(res, {
    statusCode: 200,
    data: token,
    message: 'User Logged In Succesfullly',
  })
})

const changePassword = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const decoded = req.user
    console.log('Decoded From Changed Password', req.body)
    const result = await authServices.changePassword(decoded, req.body)
    sendSuccessResponse(res, {
      statusCode: 200,
      data: result,
      message: 'User Password Changed  Succesfullly',
    })
  },
)

// const refreshToken=()=>{
//   catchAsyncFunction(async (req:Request,res:Response,next:NextFunction) => {

//     const refreshToken=req.cookies.refreshToken,
//     if(!refreshToken){
//       throw new Error("Invalid Refresh Token")
//     }

//     // const result=await authServices.refreshToken(refreshToken)
//     // console.log("Result From Refresh Token",result)

//   })

// }
export const authController = {
  register,
  login,
  changePassword,
}
