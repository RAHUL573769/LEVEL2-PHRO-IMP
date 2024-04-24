import { ZodError } from "zod";
import { TErrorIssues, TErrorResponse } from "../utils/errorType";
import httpStatus from "http-status";

export const handleZodError = (error: ZodError): TErrorResponse => {
  const issues: TErrorIssues[] = error.issues.map((issue) => {
    return {
      path: issue.path[issue.path.length - 1] as string,
      message: issue.message
    };
  });

  return {
    message: "Zod  Error Found",
    status: "Failed",
    statusCode: httpStatus.NOT_FOUND,
    issues
  };
};
