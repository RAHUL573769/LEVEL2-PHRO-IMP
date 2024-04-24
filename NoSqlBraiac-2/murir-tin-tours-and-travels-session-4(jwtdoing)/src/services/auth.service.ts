import { createToken } from '../helpers/jwtHelpers'
import { IUser } from '../interfaces/user.interface'
import User from '../models/user.model'
import { JwtPayload } from 'jsonwebtoken'

// type JwtPayload = {
//   email: string
//   role: string
// }
interface IRegister
  extends Omit<IUser, 'userStatus' | 'role' | 'passwordChangedAt'> {
  myName: string
  yourName: string
}

const register = async (payload: IRegister) => {
  // const password = payload.password
  // const hashedPassword = await bcrypt.hash(password, 21)
  // console.log(hashedPassword)
  const result = await User.create({
    ...payload,
    userStatus: 'active',
    // password: hashedPassword,
    role: 'user',
  })

  return result
}

interface ILogin {
  email: string
  password: string
}

const login = async (payload: ILogin) => {
  const user = await User.findOne(payload)
  //  npm install --save @types/jsonwebtoken

  if (!user) {
    throw new Error('Invalid Credentials')
  }

  //jwt 3 parts
  //header payload signature
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const jwtPayload: JwtPayload = {
    email: user.email,
    role: user.role,
  }
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  //token creation
  // const token = jwt.sign(jwtPayload, 'jwt-secret', {
  //   expiresIn: '1hr',
  // })
  const token = createToken(jwtPayload, 'jwt-secret', { expiresIn: '1D' })
  return { token }
}

export const authServices = {
  register,
  login,
}
