import { NextFunction, Request, Response } from 'express'
import catchAsyncFunction from '../utils/catchAsync'
// import User from '../models/user.model'
import { USER_ROLE } from '../constants/user.constants'
import { JwtPayload } from 'jsonwebtoken'
import User from '../models/user.model'
import { verifyToken } from '../helpers/jwt.helpers'
// import { createToken } from '../helpers/jwt.helpers'

export const checkAuth = (...roles: Array<keyof typeof USER_ROLE>) => {
  //   console.log(roles)
  return catchAsyncFunction(
    async (req: Request, res: Response, next: NextFunction) => {
      // console.log(roles)
      //   console.log(req.headers.authorization)

      const token = req.headers.authorization

      if (!token) {
        throw new Error('Invalid Token')
      }
      // const decodedToken = jwt.verify(token, 'tour-secret')
      const decodedToken = verifyToken(token, 'tour-secret')
      req.user = decodedToken as JwtPayload
      const { email, role } = decodedToken as JwtPayload
      console.log(decodedToken, email, role)

      if (!email) {
        throw new Error('Invalid Email in Decoded Email')
      }
      //   const email = req.body.email
      //   const password = req.body.password
      //   const user = await User.findOne({ email, password })

      const user = await User.findOne({ email }).select('+password')
      if (!user) {
        throw new Error('Invalid User')
      }
      //   //   if (result?.role !== 'admin') {
      //   //     throw new Error('Invalid User Privilages')
      //   //   }
      console.log(roles.includes(user.role))
      if (roles.includes(user.role)) {
        throw new Error('Invalid User Privilages')
      }
      next()
    },
  )
}
