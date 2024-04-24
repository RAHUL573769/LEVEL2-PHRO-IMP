import mongoose from 'mongoose'
import { TError, TErrorIssues } from '../typers/TError'

export const handleValidationError = (
  err: mongoose.Error.ValidationError,
): TError => {
  //   let validationError: TError

  // console.log(errorResponse)

  const errorValues = Object.values(err.errors)
  const issues: TErrorIssues[] = []
  errorValues.forEach((errObj) => {
    // console.log('14', errObj)
    issues.push({
      path: errObj.path,
      message: errObj.message,
    })
  })
  console.log(issues)
  return {
    statusCose: 400,
    status: 'Failed',
    err: 'This is Error',
    message: 'Validation Error',
    issues,
    // stack: '',
  }
}
