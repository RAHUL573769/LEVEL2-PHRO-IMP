/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose from 'mongoose'
import { TError, TErrorIssues } from '../typers/TError'

export const handleCastError = (err: mongoose.Error.CastError): TError => {
  // let validationError: TError

  // console.log(errorResponse)

  const issues: TErrorIssues[] = [
    {
      path: err.path,
      message: err.message,
    },
  ]

  console.log(issues)
  return {
    statusCose: 409,
    status: 'Failed',
    err: 'This is Error',
    message: 'Cast Error',
    issues,
  }
}
