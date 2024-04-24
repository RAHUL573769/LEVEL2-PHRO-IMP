/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose from 'mongoose'
import { TError, TErrorIssues } from '../typers/TError'

export const handleDuplicateError = (
  err: mongoose.Error.ValidationError,
): TError => {
  // let validationError: TError

  // console.log(errorResponse)

  const issues: TErrorIssues[] = [
    {
      path: '',
      message: 'Duplicate Error Found',
    },
  ]

  console.log(issues)
  return {
    statusCose: 409,
    status: 'Failed',
    err: 'This is Error',
    message: 'Duplicagion Error',
    issues,
    // stack: '',
  }
}
