"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const http_status_1 = __importDefault(require("http-status"));
const config_1 = __importDefault(require("../config"));
const errorPreprocessor_1 = require("./errorPreprocessor");
const globalErrorHandler = (err, req, res, next) => {
    // let message = "Error From Global Error Handler";
    // let error = err || "eRROR";
    // let statusCode = err.statusCode || 404;
    // let status = err.status || "Failed";
    // console.log(err.name);
    let errorResponse = {
        message: "Validation Error",
        status: "Failed" || err.status,
        statusCode: http_status_1.default.NOT_FOUND || err.statusCode,
        issues: err.issues || []
    };
    // if (err && err.name === "ValidationError") {
    //   statusCode = 400;
    //   message = err.message;
    //   status = err.status || "Failed From Validation Error";
    // }
    errorResponse = (0, errorPreprocessor_1.errorPreprocessor)(err);
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
        stack: config_1.default.node_env === "developement" ? err.stack : "undefined"
        // err
    });
};
exports.globalErrorHandler = globalErrorHandler;
//pattern-->
//success
//message
// errorSources:[
//   path:"",
// message
// ]
