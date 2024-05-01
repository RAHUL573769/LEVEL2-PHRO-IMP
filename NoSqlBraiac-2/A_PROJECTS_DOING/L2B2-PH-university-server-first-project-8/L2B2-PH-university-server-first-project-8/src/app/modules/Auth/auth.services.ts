/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-unused-vars */

// eslint-disable-next-line no-undef
import jwt, { Secret } from 'jsonwebtoken';
import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import { TLoginUser } from './auth.interface';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import bcrypt from 'bcrypt';
import config from '../../config';
const loginUser = async (payload: TLoginUser) => {
  //   console.log(payload);
  //checking if user exists

  // const user= await User.findOne({ id: payload.id });
  // const user=  User.isUserExistsByCustomId(payload.id);
  const user = await User.isUserExistsByCustomId(payload.id);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This User is not Found!!');
  }
  // console.log(isUserExists);
  //checking if the user is already deleted

  const isDeleted = user?.isDeleted;
  // console.log(isDeleted);
  if (isDeleted) {
    throw new AppError(httpStatus.NOT_FOUND, 'This User is      Deleted!!');
  }

  //checking if the user is blocked

  const userStatus = user.status;
  if (userStatus === 'blocked') {
    throw new AppError(httpStatus.FORBIDDEN, 'This User is  Blocked!!');
  }

  //checking if the password is correct
  // const isPasswordMatch = await bcrypt.compare(
  //   payload?.password,
  //   isUserExists?.password,
  // );

  const isPasswordMatch = await User.isPasswordMatch(
    payload?.password,
    user?.password,
  );
  // console.log(isPasswordMatch);

  if (!isPasswordMatch)
    throw new AppError(httpStatus.FORBIDDEN, '"pASSWORD nOT mATCHED!!');
  //creae access token

  const jwtPayload = {
    userId: user,
    role: user.role,
  };
  const accessToken = jwt.sign(
    jwtPayload,
    config.access_token_secret as Secret,
    {
      expiresIn: config.access_token_expires_in,
    },
  );
  return { accessToken, needsPasswordChange: user?.needsPasswordChange };

  // console.log(accessToken);
};

export const AuthServices = { loginUser };
