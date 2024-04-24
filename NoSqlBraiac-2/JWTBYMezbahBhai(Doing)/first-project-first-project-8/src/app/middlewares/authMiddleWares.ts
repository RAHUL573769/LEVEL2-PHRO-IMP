/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import AppError from '../errors/AppError';
import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { TUserRole } from '../modules/user/user.constants';

// interface CustomRequest extends Request {
//   user: JwtPayload;
// }
export const auth = (...requiredRole: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // console.log('Headers from Auth Middle Ware', req.headers.authorization);

    const token = req.headers.authorization;
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized');
    }

    jwt.verify(token, 'secret', function (err: unknown, decoded: unknown) {
      if (err) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'You are Not Authorizes');
      }
      // console.log('Decoded', decoded);

      const role = (decoded as JwtPayload).role;
      if (requiredRole && requiredRole.includes(role)) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'You Are Not Authorized');
      }
      // const { userId, role } = decoded;
      req.user = decoded as JwtPayload;
      next();
    });
    // next();
  });
};
