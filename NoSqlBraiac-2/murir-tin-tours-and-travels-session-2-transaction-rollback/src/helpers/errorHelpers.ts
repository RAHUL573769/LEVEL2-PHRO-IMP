import mongoose from 'mongoose'
import { TErrorIssue, TErrorResponse } from '../types/TErrorRespone'

export const handleValidationError = (
  err: mongoose.Error.ValidationError,
): TErrorResponse => {
  // let errorResponse={};

  //   let validationErrors: TErrorResponse

  const errorValues = Object.values(err.errors)
  const issues: TErrorIssue[] = []
  errorValues.forEach((errObj) => {
    issues.push({
      path: errObj.path,
      message: errObj.message,
    })
  })

  return {
    message: 'Validation Error',
    err: 'There is Validation Error',
    statusCode: 4000,
    status: 'error',
    issues,
  }
  console.log('27', errorValues)
}
