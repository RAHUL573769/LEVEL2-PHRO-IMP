import jwt, { JwtPayload, Secret } from "jsonwebtoken";
export const generateToken = (
  payload: any,
  secret: string,
  expiresIn: string
) => {
  var token = jwt.sign(payload, secret, {
    expiresIn: expiresIn
  });
  return token;
};

export const verifyToken = (token: string, secret: Secret) => {
  return jwt.verify(token, "abcdefgh") as JwtPayload;
};
