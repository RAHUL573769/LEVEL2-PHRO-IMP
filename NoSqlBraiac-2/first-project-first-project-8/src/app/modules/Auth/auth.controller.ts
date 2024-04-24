import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AuthService } from './auth.service';

const loginUser = catchAsync(async (req, res) => {
  const result = await AuthService.loginUser(req.body);

  sendResponse(res, {
    message: '',
    statusCode: 200,
    success: true,
    data: result,
  });
});


export const AuthControllers={
    loginUser
}
