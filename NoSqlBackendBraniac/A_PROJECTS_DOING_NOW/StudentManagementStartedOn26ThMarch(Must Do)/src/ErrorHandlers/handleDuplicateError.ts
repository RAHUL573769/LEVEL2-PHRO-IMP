import httpStatus from "http-status";
import mongoose from "mongoose";
import { TErrorIssues, TErrorResponse } from "../utils/errorType";

export const handleDuplicateError = (error: any): TErrorResponse => {
  var regex = /"(.*?)"/;
  var matches = error.message.match(regex);
  const issues: TErrorIssues[] = [
    {
      path: "",
      message: `Value is Duplicate for ${matches![1]}`
    }
  ];

  return {
    message: "Duplicate Error",
    status: "Failed",
    statusCode: httpStatus.NOT_FOUND,
    issues
  };
};
