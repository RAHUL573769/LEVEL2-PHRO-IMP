import httpStatus from "http-status";
import { TErrorIssues, TErrorResponse } from "../utils/errorType";

export const handleCastError = (error: any): TErrorResponse => {
  const issues: TErrorIssues[] = [
    {
      path: error.path,
      message: error.message
    }
  ];

  return {
    message: "Cast  Error",
    status: "Failed",
    statusCode: httpStatus.NOT_FOUND,
    issues
  };
};
