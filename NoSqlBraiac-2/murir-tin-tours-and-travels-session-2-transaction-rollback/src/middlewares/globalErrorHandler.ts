/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextFunction, Request, Response } from 'express'
import mongoose from 'mongoose'
import { TErrorResponse } from '../types/TErrorRespone'
import { handleValidationError } from '../helpers/errorHelpers'

/* eslint-disable @typescript-eslint/no-explicit-any */
const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // let statusCode = err.statusCode || 500
  // let message = err.message || 'Something went wrong'
  // let status = err.status || 'error'
  const errorResponse: TErrorResponse = {
    message: err.message || 'Something went Wrong',
    err: 'Tthis is validation Error',
    status: err.status || 'error',
    statusCode: err.statusCode || 500,
    issues: err.issues || [],
  }
  // console.log(err)

  // if (err.name && err.name === 'ValidatorError') {
  //   console.log('Ami Validation Error')
  //   statusCode = 400
  //   message = err.message
  //   status = 'error'
  // }
  // if (err instanceof Error) {
  //   console.log('Ami Validation Error')
  //   statusCode = 400
  //   message = err.message
  //   status = 'error'
  // }
  if (err instanceof mongoose.Error.ValidationError) {
    const errorResponse = handleValidationError(err)
    // errorResponse.statusCode = 400
    // errorResponse.message = err.message
    // errorResponse.status = 'error'
    // errorResponse.err = 'There is Error While Sending Data'
    // const errorValues = Object.values(err.errors)
    // errorValues.forEach(
    //   (errObj: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
    //     errorResponse.issues.push({
    //       path: errObj.path,
    //       message: errObj.message,
    //     })
    //   },
    // )
    // console.log(errorValues)
  }

  //step-2
  res.status(errorResponse.statusCode).json({
    message: errorResponse.message,
    err: errorResponse.err,
    status: errorResponse.status,
    issues: errorResponse.issues,
  })
}

export default globalErrorHandler
