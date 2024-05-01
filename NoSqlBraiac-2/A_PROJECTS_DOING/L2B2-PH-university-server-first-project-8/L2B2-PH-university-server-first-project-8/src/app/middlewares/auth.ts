import { NextFunction, Request, Response } from 'express';
import AppError from '../errors/AppError';
import httpStatus from 'http-status';
import jwt, { JwtPayload, Secret } from 'jsonwebtoken';
import config from '../config';
import { TUserRole } from '../modules/user/user.constants';

// interface CustomRequest extends Request {
//   user: JwtPayload;
// }

const auth = (...requiredRoles: TUserRole[]) => {
  //   console.log('RequiredRoles', requiredRoles);
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      //   console.log('Authorization', req.headers.authorization);
      const token = req.headers.authorization;
      //if token is send from client
      if (!token) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'Token Unvalid');
      }

      //if token is valid
      jwt.verify(
        token,
        config.access_token_secret as Secret,
        function (err, decoded) {
          // err

          if (err) {
            throw new AppError(
              httpStatus.UNAUTHORIZED,
              'You Are not Authorized ',
            );
          }
          // decoded undefined
          const role = (decoded as JwtPayload).role;
          //   console.log('Rpod', role);
          if (requiredRoles && !requiredRoles.includes(role)) {
            throw new AppError(
              httpStatus.UNAUTHORIZED,
              'You Are not Authorized ==1 ',
            );
          }
          //   const { userId} = decoded;
          req.user = decoded as JwtPayload;
          //   console.log('Decoded', decoded);
        },
      );

      next();
    } catch (err) {
      next(err);
    }
  };
};

export default auth;
