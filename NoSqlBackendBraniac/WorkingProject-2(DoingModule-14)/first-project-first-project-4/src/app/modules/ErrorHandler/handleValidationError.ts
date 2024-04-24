/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import mongoose from 'mongoose';
import { TErrorIssues, TErrorSource } from '../../../types/types/types';

export const handleValidationError = (
  err: mongoose.Error.ValidationError,
): TErrorSource => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const errorValues = Object.values(err.errors);
  const issues: TErrorIssues[] = [];
  // console.log(issues);
  const newIssues = errorValues.map(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (errObj: mongoose.Error.CastError | mongoose.Error.ValidatorError) => {
      issues.push({
        path: errObj.path,
        message: errObj.message,
      });
    },
  );
  return {
    message: 'Validation Error!!!!',
    statusCode: 404,
    status: 'Fail',
    issues,
  };
};
