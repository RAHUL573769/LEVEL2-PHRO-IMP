import { NextFunction, Request, Response } from 'express';
import AppError from '../errors/AppError';
import httpStatus from 'http-status';
// import { AnyZodObject } from 'zod';
import jwt from 'jsonwebtoken';

const auth = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // validation check
      //if everything allright next() ->
      // console.log(req.body, 'req.body');

      console.log(req.headers.authorization);

      const token = req.headers.authorization;
      console.log(token);
      //if token is sent checked here
      if (!token) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'You are Un authorized');
      }

      //ck=heck if token is valid
      jwt.verify(token, 'shhhhh', function (err, decoded) {
        if (err) {
          throw new AppError(httpStatus.UNAUTHORIZED, 'You are Un authorized');
        }

        console.log(decoded);
      });
      next();
    } catch (err) {
      next(err);
    }
  };
};

export default auth;
//called in faculty route
