import z from 'zod';

const loginValidation = z.object({
  id: z.object({
    id: z.string({ required_error: 'Id Is Required' }),

    password: z.string({ required_error: 'Password is Required' }),
  }),
});

export const AuthValidation = { loginValidation };
