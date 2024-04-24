import { z } from 'zod';

const loginAuthentication = z.object({
  body: z.object({
    id: z.string({ required_error: 'Id is Required' }),
  }),
});

const changePasswordValidation = z.object({
  body: z.object({
    oldPassword: z.string({ required_error: 'Old Password is Requires' }),
    newPassword: z.string({ required_error: 'New  Password is Requires' }),
    id: z.string({ required_error: 'Id is Required' }),
  }),
});
export const AuthValidation = {
  loginAuthentication,
  changePasswordValidation,
};
