import { NextFunction, Request, Response } from 'express';
import AppError from '../errors/AppError';
import httpStatus from 'http-status';
import jwt, { JwtPayload, Secret } from 'jsonwebtoken';
import config from '../config';
import { TUserRole } from '../modules/user/user.constants';
import catchAsync from '../utils/catchAsync';
import { User } from '../modules/user/user.model';

// interface CustomRequest extends Request {
//   user: JwtPayload;
// }

const auth = (...requiredRoles: TUserRole[]) => {
  //   console.log('RequiredRoles', requiredRoles);
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    //   console.log('Authorization', req.headers.authorization);
    const token = req.headers.authorization;
    //if token is send from client
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'Token Unvalid');
    }

    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    const decoded = jwt.verify(token, config.access_token_secret as Secret);
    //if token is valid

    // const role = (decoded as JwtPayload).role;

    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    const { userId, role, iat } = decoded as JwtPayload;
    // console.log(userId);
    // const user = await User.isUserExistsByCustomId(userId);
    // console.log(iat);
    const user = await User.isUserExistsByCustomId(userId.id);
    console.log('decoded', decoded);
    // if (!user) {
    //   throw new AppError(httpStatus.NOT_FOUND, 'This User is not Found!!');
    // }
    // console.log(isUserExists);
    //checking if the user is already deleted

    // const isDeleted = user?.isDeleted;
    // // console.log(isDeleted);
    // if (isDeleted) {
    //   throw new AppError(httpStatus.NOT_FOUND, 'This User is      Deleted!!');
    // }

    //checking if the user is blocked
    // console.log('User', user);
    // const userStatus = user.status;
    // if (userStatus === 'blocked') {
    //   throw new AppError(httpStatus.FORBIDDEN, 'This User is  Blocked!!');
    // }
    if (!user)
      throw new AppError(httpStatus.NOT_FOUND, 'The User is not Found');
    console.log(user.passwordChangedAt);
    if (
      user.passwordChangedAt &&
      (await User.isJwtIssuesBeforePasswordChange(
        user.passwordChangedAt,
        iat as number,
      ))
    ) {
      throw new AppError(
        httpStatus.UNAUTHORIZED,
        'You Are not Authorized for timestamp ',
      );

      console.log('jo');
    }
    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You Are not Authorized 1 ');
    }
    // const { userId} = decoded;
    req.user = decoded as JwtPayload;

    next();
    // console.log('Decoded', decoded);
    // jwt.verify(
    //   token,
    //   config.access_token_secret as Secret,
    //   function (err, decoded) {
    //     // err

    //     if (err) {
    //       throw new AppError(
    //         httpStatus.UNAUTHORIZED,
    //         'You Are not Authorized ',
    //       );
    //     }
    //     // decoded undefined
    //     // const role = (decoded as JwtPayload).role;
    //     // console.log('Rpod', decoded);
    //     // if (requiredRoles && !requiredRoles.includes(role)) {
    //     //   throw new AppError(
    //     //     httpStatus.UNAUTHORIZED,
    //     //     'You Are not Authorized 1 ',
    //     //   );
    //     // }
    //     //   const { userId} = decoded;
    //     // req.user = decoded as JwtPayload;
    //     //   console.log('Decoded', decoded);
    //   },
    // );

    // next();
  });
};

export default auth;
