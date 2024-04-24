import jwt, { JwtPayload } from 'jsonwebtoken'

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const createToken = (
  jwtPayload: JwtPayload,
  secret: string,
  options: {
    expiresIn: string
  },
) => {
  return jwt.sign(jwtPayload, secret, options)
}

export const verifyToken = (token: string, secret: string) => {
  return jwt.verify(token, secret)
}

export const refreshToken = () => {}
