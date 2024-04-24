import mongoose from "mongoose";
import { TErrorIssues, TErrorResponse } from "../utils/errorType";
import httpStatus from "http-status";

export const handleValidationError = (
  error: mongoose.Error.ValidationError
): TErrorResponse => {
  const errorValues = Object.values(error.errors);
  const issues: TErrorIssues[] = [];
  errorValues.forEach((errorObj) => {
    issues.push({
      path: errorObj.path,
      message: errorObj.message
    });
  });

  return {
    message: "Validation Error",
    status: "Failed",
    statusCode: httpStatus.NOT_FOUND,
    issues
  };
};
