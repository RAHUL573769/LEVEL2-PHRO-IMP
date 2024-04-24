// import mongoose from 'mongoose'
import { TError, TErrorIssues } from '../typers/TError'
import GenericError from '../classes/errorClasses/GenericError'

export const handleGenericError = (err: GenericError): TError => {
  //   let validationError: TError

  // console.log(errorResponse)

  const issues: TErrorIssues[] = [
    {
      path: '',
      message: err.message,
    },
  ]

  console.log(issues)
  return {
    statusCose: err.statusCode,
    status: 'Failed',
    err: 'This is Error',
    message: 'Generic Error',
    issues,
    // stack: '',
  }
}
