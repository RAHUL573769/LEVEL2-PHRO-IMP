/* eslint-disable no-unused-labels */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import { TErrorIssues, TErrorSource } from '../../types/types/types';
import { handleZodError } from '../modules/ErrorHandler/handleZodError';
import mongoose from 'mongoose';
import { handleValidationError } from '../modules/ErrorHandler/handleValidationError';

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = 500;
  const message = 'Error From global ' || 'Something went wrong!';
  // console.log(err);

  let errorSource: TErrorSource = {
    message: 'This is Error From Error Sources',
    statusCode: 404,
    status: 'Failed',
    issues: [
      {
        path: '',
        message: '',
      },
    ],
  };

  // const handleZodError = (err: ZodError) => {};

  if (err && err instanceof ZodError) {
    errorSource = handleZodError(err);
    // errorSource.message = 'Ami Zod ERROR!!!';
    // errorSource.statusCode = 404;
    // errorSource.status = 'Failed!!!';

    // console.log(err.issues);
  } else if (err && err instanceof mongoose.Error.ValidationError) {
    // console.log('Ami validation Error');
    // errorSource.message = 'Ami ZVALLIDATION ERROR!!!';
    // errorSource.statusCode = 404;
    // errorSource.status = 'Failed!!!';

    errorSource = handleValidationError(err);

    console.log(errorSource);
  }

  return res.status(errorSource.statusCode).json({
    success: errorSource.status,
    message: errorSource.message,
    issues: errorSource.issues,
    // amrError: err,
  });
};

export default globalErrorHandler;
