/* eslint-disable @typescript-eslint/no-unused-vars */
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AuthServices } from './auth.services';

// eslint-disable-next-line no-unused-vars
const loginUser = catchAsync(async (req, res, next) => {
  const result = await AuthServices.loginUser(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is logged in',
    data: result,
  });
});
// eslint-disable-next-line no-unused-vars
const changedPassword = catchAsync(async (req, res, next) => {
  // const result = await AuthServices.loginUser(req.body);
  // const user=req.user;
  const { ...passwordData } = req.body;

  console.log('Output From AuthController 22 number Line', req.user, req.body);

  const result = await AuthServices.changedPassword(req.user, passwordData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is logged in',
    // data: result,
    data: null,
  });
});

export const AuthControllers = { loginUser, changedPassword };
