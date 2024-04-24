import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { TError } from "../Types/errorPattern";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // let message = err.message || "Something is Wrong";
  // let status = err.status || "Error";
  // let statusCode = err.statusCode || 500;

  const errorResponse: TError = {
    message: err.message || "Somethng Went Wrong",
    error: err,
    status: "Failed",
    statusCode: err.statusCode || 500,
    issues: err.issues || []
  };

  if (err && err instanceof mongoose.Error.ValidationError) {
    console.log("Ami Validation Error");
    errorResponse.message = err.message;
    // errorResponse.issues=
    errorResponse.error = "This is Validation Error";
    errorResponse.status = "Fail";

    const errorValues = Object.values(err.errors);
    errorValues.map(
      (errorObj: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
        errorResponse.issues.push({
          path: errorObj.path,
          message: errorObj.message,
          stack: errorObj.stack
        });
      }
    );
    console.log("Error From Global Error Handler", errorValues);
  }
  res.status(errorResponse.statusCode).json({
    message: errorResponse.message,
    status: errorResponse.status,
    err: errorResponse.error,
    issues: errorResponse.issues
  });
};
