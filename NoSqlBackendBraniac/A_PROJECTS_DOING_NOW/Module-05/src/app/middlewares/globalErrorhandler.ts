/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { ZodError, ZodIssue } from 'zod';

import mongoose from 'mongoose';

import { handleCastError } from '../errors/handleCastError';
import { handleDuplicateError } from '../errors/handleDuplicateError';
import { handleZodError } from '../errors/handleZodError';
import { TErrorSource } from '../interface/error';
import { handleValidationError } from '../errors/handleValidationError';

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  //Setting Default Values
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Something went wrong!';
  // let status = 'failed';

  //Setting Default Values

  // eslint-disable-next-line prefer-const
  let errorSource: TErrorSource = [
    {
      path: '',
      message: 'Something Went Wrong ',
    },
  ];
  // console.log(err);

  // const handleZodError = (err: ZodError) => {
  //   const errorSources: TErrorSource = err.issues.map((issue: ZodIssue) => {
  //     return {
  //       path: issue?.path[issue.path.length - 1],
  //       message: issue.message,
  //     };
  //   });

  //   return {
  //     statusCode,
  //     message: 'Zod Validation Error',
  //     errorSources,
  //   };
  // };

  // const handleCastError = (err: mongoose.Error.CastError): TGenericError => {
  //   console.log('Ami Cast Error');
  //   const errorSources: TErrorSource = [
  //     {
  //       path: err.path,
  //       message: err.message,
  //     },
  //   ];
  //   return {
  //     statusCode,
  //     errorSources,
  //     message,
  //   };
  // };

  if (err && err instanceof ZodError) {
    const simplifiedError = handleZodError(err);

    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSource = simplifiedError.errorSources;
    // console.log('Simplified Error', simplifiedError);
  } else if (err && err.name === 'ValidationError') {
    const simplifiedError = handleValidationError(err);
    // console.log(simplifiedError);

    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSource = simplifiedError.errorSources;
  } else if (err && err.name === 'CastError') {
    const simplifiedError = handleCastError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSource = simplifiedError.errorSources;
  } else if (err && err.code === 11000) {
    const simplifiedError = handleDuplicateError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSource = simplifiedError.errorSources;
  } else if (err && err instanceof Error) {
    message = err.message;
    errorSource = [
      {
        path: '',
        message: err?.message,
      },
    ];
  }
  console.log(err);

  return res.status(statusCode).json({
    success: false,
    message,
    errorSource,
    err,
    stack: err.stack,
  });
};

export default globalErrorHandler;
