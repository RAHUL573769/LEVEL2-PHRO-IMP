import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import { TLogin } from './auth.interface';
import jwt, { JwtPayload } from 'jsonwebtoken';
// import bcrypt from 'bcrypt';
const loginUser = async (payload: TLogin) => {
  console.log(payload);

  //checking if user exists
  const user = await User.isUserExists(payload.id);
  console.log('User from Auth Services 11th Line', user);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user not Found');
  }
  //checking if the user is already deleated
  const isDeleted = (await user).isDeleted;
  if (isDeleted) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is Deleted');
  }

  //checking if the user is blocked
  const userStatus = (await user).status;
  if (userStatus === 'blocked') {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is Blocked');
  }
  //   checking if paaword is correct
  //   const isPaaswordMatched = await bcrypt.compare(
  //     payload.password,
  //     user?.password,
  //   );
  //   console.log(isPaaswordMatched);
  const jwtPayload = {
    // userId: user,
    userId: user.id,
    role: user.role,
  };
  // console.log('Value of JwtPayload', jwtPayload);

  const accessToken = jwt.sign(jwtPayload, 'secret', {
    expiresIn: '1d',
  });
  console.log('From Auth Services', accessToken);
  return {
    accessToken,
    needsPasswordChange: user.needsPasswordChange,
  };
  //Aceess Granted
};

const changedPassword = async (
  // user: { userId: string; role: string },
  user: JwtPayload,
  payload,
) => {
  const result = await User.findByIdAndUpdate({
    id: user.userId,
    role: user.role,
  });
};
export const AuthServices = { loginUser, changedPassword };
