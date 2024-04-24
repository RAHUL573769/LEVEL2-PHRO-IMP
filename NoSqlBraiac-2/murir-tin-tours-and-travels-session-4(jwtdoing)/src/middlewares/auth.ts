/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express'
import catchAsyncFunction from '../utils/catchAsync'
import { USER_ROLE } from '../constants/users.constants'
import User from '../models/user.model'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { verify } from './../../node_modules/@types/jsonwebtoken/index.d'
import { verifyToken } from '../helpers/jwtHelpers'

export const checkAuth = (...roles: Array<keyof typeof USER_ROLE>) => {
  //   console.log('Roles in Check Route', roles)

  return catchAsyncFunction(
    async (req: Request, res: Response, next: NextFunction) => {
      const token = req.headers.authorization
      console.log(token)
      //   const email = req.body.email
      //   const password = req.body.password
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      //   const name = req.body.name
      //   console.log(email, password, name)

      if (!token) {
        throw new Error('Inavalid Token')
      }
      // const decodedToken = jwt.verify(token, 'jwt-secret')
      const decodedToken = verifyToken(token, 'jwt-secret')
      console.log(decodedToken)

      const { email, role } = decodedToken as JwtPayload
      console.log(email, role)
      const user = await User.findOne({ email })
      //   const user = await User.findOne({ email })
      //   console.log(user)
      if (!user) {
        throw new Error('Invalid Email and Password')
      }

      const checkAuthorization = roles.includes(user.role)
      //   if (!checkAuthorization) {
      //     throw new Error('You are not Authorizes Password')
      //   }
      if (!checkAuthorization) {
        throw new Error('You are not Authorizes Password')
      }
      next()
    },
  )
}
