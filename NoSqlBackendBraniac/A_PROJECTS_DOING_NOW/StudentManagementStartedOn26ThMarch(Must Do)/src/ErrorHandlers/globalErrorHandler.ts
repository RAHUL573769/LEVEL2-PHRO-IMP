import e, {
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response
} from "express";
import mongoose from "mongoose";
import { TErrorResponse } from "../utils/errorType";
import httpStatus from "http-status";
import { handleValidationError } from "./handleValidationError";
import { handleDuplicateError } from "./handleDuplicateError";
import { handleCastError } from "./handleCastError";
import { handleGenericError } from "./handleGenericError";
import config from "../config";
import { AppError } from "../classes/AppError";
import { errorPreprocessor } from "./errorPreprocessor";

export const globalErrorHandler: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // let message = "Error From Global Error Handler";
  // let error = err || "eRROR";
  // let statusCode = err.statusCode || 404;
  // let status = err.status || "Failed";
  // console.log(err.name);

  let errorResponse: TErrorResponse = {
    message: "Validation Error",
    status: "Failed" || err.status,
    statusCode: httpStatus.NOT_FOUND || err.statusCode,
    issues: err.issues || []
  };

  // if (err && err.name === "ValidationError") {
  //   statusCode = 400;
  //   message = err.message;
  //   status = err.status || "Failed From Validation Error";
  // }

  errorResponse = errorPreprocessor(err);
  // if (err && err instanceof mongoose.Error.ValidationError) {
  //   console.log("Ami vALI");
  //   // statusCode = 400;
  //   // message = err.message;
  //   // status = "Failed From Validation Error";

  //   // const errorValues = Object.values(err.errors);
  //   // console.log("Error Values", errorValues);

  //   // errorValues.forEach(
  //   //   (errorObj: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
  //   //     errorResponse.issues.push({
  //   //       path: errorObj.path,
  //   //       message: errorObj.message
  //   //     });
  //   //   }
  //   // );

  //   errorResponse = handleValidationError(err);

  //   // console.log("Ami Validation Error");
  //   // console.log(err.errors);
  // } else if (err && err.code === 11000) {
  //   console.log("Ami duplicate Error");

  //   errorResponse = handleDuplicateError(err);
  //   // console.log(err.message);

  //   // var regex = /"(.*?)"/;
  //   // var matches = err.message.match(regex);
  //   // errorResponse.statusCode = 400;
  //   // errorResponse.message = "Duplicate Error";
  //   // errorResponse.status = "Failed From Validation Error";
  //   // errorResponse.issues = [
  //   //   {
  //   //     path: "",
  //   //     message: `Value is Duplicate for ${matches![1]}`
  //   //   }
  //   // ];
  // } else if (err && err instanceof mongoose.Error.CastError) {
  //   console.log("Ami Cast Error");
  //   // errorResponse.statusCode = 400;
  //   // errorResponse.message = err.message;
  //   // errorResponse.status = "Failed From Cast Error Error";
  //   // errorResponse.issues = [
  //   //   {
  //   //     path: err.path,
  //   //     message: err.message
  //   //   }
  //   // ];
  //   errorResponse = handleCastError(err);
  // } else if (err && err instanceof AppError) {
  //   // errorResponse.statusCode = 400;
  //   // errorResponse.message = err.message;

  //   // errorResponse.status = "Generic Error";

  //   errorResponse = handleGenericError(err);
  // }
  res.status(errorResponse.statusCode).json({
    message: errorResponse.message,

    status: errorResponse.status,
    issues: errorResponse.issues,
    // err,
    stack: config.node_env === "developement" ? err.stack : "undefined"
    // err
  });
};

//pattern-->

//success
//message
// errorSources:[

//   path:"",
// message
// ]
