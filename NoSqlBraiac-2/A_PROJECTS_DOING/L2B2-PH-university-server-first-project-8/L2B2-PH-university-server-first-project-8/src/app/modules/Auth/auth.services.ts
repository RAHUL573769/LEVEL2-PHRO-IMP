/* eslint-disable no-unused-vars */
import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import { TLoginUser } from './auth.interface';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import bcrypt from 'bcrypt';
const loginUser = async (payload: TLoginUser) => {
  //   console.log(payload);
  //checking if user exists

  // const isUserExists = await User.findOne({ id: payload.id });
  // const isUserExists =  User.isUserExistsByCustomId(payload.id);
  const isUserExists = await User.isUserExistsByCustomId(payload.id);

  if (!isUserExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'This User is not Found!!');
  }
  // console.log(isUserExists);
  //checking if the user is already deleted

  const isDeleted = isUserExists?.isDeleted;
  // console.log(isDeleted);
  if (isDeleted) {
    throw new AppError(httpStatus.NOT_FOUND, 'This User is      Deleted!!');
  }

  //checking if the user is blocked

  const userStatus = isUserExists.status;
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
    isUserExists?.password,
  );
  // console.log(isPasswordMatch);

  if (!isPasswordMatch) {
    throw new AppError(httpStatus.FORBIDDEN, '"pASSWORD nOT mATCHED!!');
  }
};

export const AuthServices = { loginUser };
