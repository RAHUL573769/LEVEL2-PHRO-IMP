/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AuthServices } from './auth.services';
import config from '../../config';

const loginUser = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await AuthServices.loginUser(data);
  const { refreshToken, accessToken, needsPasswordChange } = result;

  res.cookie('refreshtoken', refreshToken, {
    secure: config.NODE_ENV === 'production',
    httpOnly: true,
  });
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Logged in successfully',
    data: result,
  });
});

const changePassword = catchAsync(async (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const data = req.body;
  const user = req.user;
  // console.log('User 22', user);
  const { ...passwordData } = req.body;
  // console.log('19', req.body, req.user);
  const result = await AuthServices.changePassword(user, passwordData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Password is Changed successfully',
    data: result,
  });
});

export const AuthController = { loginUser, changePassword };
