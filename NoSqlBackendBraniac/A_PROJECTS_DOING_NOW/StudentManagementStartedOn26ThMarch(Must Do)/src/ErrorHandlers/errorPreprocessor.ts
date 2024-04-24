import httpStatus from "http-status";
import { TErrorResponse } from "../utils/errorType";
import { handleValidationError } from "./handleValidationError";
import { handleDuplicateError } from "./handleDuplicateError";
import mongoose from "mongoose";
import { handleCastError } from "./handleCastError";
import { AppError } from "../classes/AppError";
import { handleGenericError } from "./handleGenericError";
import { ZodError } from "zod";
import { handleZodError } from "./handleZodError";

export const errorPreprocessor = (err: any): TErrorResponse => {
  let errorResponse: TErrorResponse = {
    message: "Validation Error",
    status: "Failed" || err.status,
    statusCode: httpStatus.NOT_FOUND || err.statusCode,
    issues: err.issues || []
  };

  if (err && err instanceof mongoose.Error.ValidationError) {
    console.log("Ami vALI");
    // statusCode = 400;
    // message = err.message;
    // status = "Failed From Validation Error";

    // const errorValues = Object.values(err.errors);
    // console.log("Error Values", errorValues);

    // errorValues.forEach(
    //   (errorObj: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
    //     errorResponse.issues.push({
    //       path: errorObj.path,
    //       message: errorObj.message
    //     });
    //   }
    // );

    errorResponse = handleValidationError(err);
    return errorResponse;

    // console.log("Ami Validation Error");
    // console.log(err.errors);
  } else if (err && err.code === 11000) {
    console.log("Ami duplicate Error");

    errorResponse = handleDuplicateError(err);
    return errorResponse;
    // console.log(err.message);

    // var regex = /"(.*?)"/;
    // var matches = err.message.match(regex);
    // errorResponse.statusCode = 400;
    // errorResponse.message = "Duplicate Error";
    // errorResponse.status = "Failed From Validation Error";
    // errorResponse.issues = [
    //   {
    //     path: "",
    //     message: `Value is Duplicate for ${matches![1]}`
    //   }
    // ];
  } else if (err && err instanceof mongoose.Error.CastError) {
    console.log("Ami Cast Error");
    // errorResponse.statusCode = 400;
    // errorResponse.message = err.message;
    // errorResponse.status = "Failed From Cast Error Error";
    // errorResponse.issues = [
    //   {
    //     path: err.path,
    //     message: err.message
    //   }
    // ];
    errorResponse = handleCastError(err);
    return errorResponse;
  } else if (err && err instanceof ZodError) {
    errorResponse = handleZodError(err);
    return errorResponse;
  } else {
    // errorResponse.statusCode = 400;
    // errorResponse.message = err.message;

    // errorResponse.status = "Generic Error";

    errorResponse = handleGenericError(err);
    return errorResponse;
  }
};
