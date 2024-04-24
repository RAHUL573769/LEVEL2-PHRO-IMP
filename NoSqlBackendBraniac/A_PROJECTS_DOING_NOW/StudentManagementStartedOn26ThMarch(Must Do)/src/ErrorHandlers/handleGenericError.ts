import httpStatus from "http-status";
import { TErrorIssues, TErrorResponse } from "../utils/errorType";
import { AppError } from "../classes/AppError";

export const handleGenericError = (error: AppError): TErrorResponse => {
  const issues: TErrorIssues[] = [
    {
      path: "",
      message: error.message
    }
  ];

  return {
    message: "Generic Error From Handler",
    status: "Failed",
    statusCode: error.statusCode,
    issues
  };
};
