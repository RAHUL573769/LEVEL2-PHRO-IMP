/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextFunction, Request, Response } from 'express'
import { MongooseError } from 'mongoose'

/* eslint-disable @typescript-eslint/no-explicit-any */
const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = err.statusCode || 500
  const message = err.message || 'Something went wrong'
  const status = err.status || 'error'
  console.log(MongooseError)
  // if(err instanceof MongooseError)

  res.status(statusCode).json({
    status,
    message,
  })
}

export default globalErrorHandler
