/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars

import jwt, { JwtPayload, Secret } from 'jsonwebtoken';
import config from '../../config';

export const createToken = (
  jwtPayload: { userId: string; role: string },
  secret: string,
  expiresIn: string,
) => {
  const accessToken = jwt.sign(jwtPayload, secret, {
    expiresIn,
  });
};
