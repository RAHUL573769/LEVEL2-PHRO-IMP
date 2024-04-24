/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import jwt, { JwtPayload } from 'jsonwebtoken'
import config from '../../config'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const createToken = (
  payload: JwtPayload,
  secret: string,
  options: { expiresIn: string },
) => {
  // eslint-disable-next-line no-undef
  return jwt.sign(payload, secret, options)
}
export const verifyToken = (token: string, secret: string) => {
  const decodedToken = jwt.verify(token, secret)
  return decodedToken
}
