/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import config from '../config'
import User from '../models/user.model'
import { IAuth, ILogin } from './auth.interface'
import { JwtPayload } from 'jsonwebtoken'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { createToken } from '../helpers/JWT/jwtHelpers'
import {
  comparePassword,
  hashPassword,
} from '../helpers/PaswordHashingAbdCompare/passwordHelpers'

const doRegister = async (data: IAuth) => {
  // eslint-disable-next-line no-unused-vars
  const password = data.password
  // const hashedPassword = await bcrypt.hash(password, 9)
  const hashedPassword = await hashPassword(password, 9)
  const result = await User.create({
    ...data,
    password: hashedPassword,
    userStatus: 'active',
    role: 'user',
  })
  return result
}

// eslint-disable-next-line no-unused-vars
const doLogin = async (data: ILogin) => {
  // const user = await User.findOne(data)
  const user = await User.findOne({ email: data.email }).select('+password') //After adding bcypt
  if (!user) {
    throw new Error('Invalid Credentials')
  }
  const password = data.password
  const hashedPassword = user.password

  const isPasswordCorrect = await comparePassword(password, hashedPassword)
  // const isCorrectPasword = await bcrypt.compare(password, hashedPassword)
  // console.log('Is paasword matched', isCorrectPasword)

  const payLoad: JwtPayload = {
    email: user.email,
    role: user.role,
  }

  const token = createToken(payLoad, config.jwt_secret, {
    expiresIn: config.jwt_expires_in,
  })
  // const token = jwt.sign(payLoad, config.jwt_secret, {
  //   expiresIn: config.jwt_expires_in,
  // })
  // console.log(token)
  return token
}

const doChangePassword = async (
  decodedToken: JwtPayload, //decoded token must be kept in ccokies
  payload: {
    oldPassword: string
    newPassword: string
  },
) => {
  const { email, role, iat, exp } = decodedToken as JwtPayload

  const user = await User.findOne({ email }).select('+password')
  if (!iat) {
    throw new Error('NoIat')
  }

  console.log('Issued At', iat)
  console.log('User Password Changes', user?.passwordChangedAt)
  // if (iat > user?.passwordChangedAt) {
  //   throw new Error('old token')
  // }
} //protected system

export const authServices = {
  doRegister,
  doLogin,
  doChangePassword,
}
