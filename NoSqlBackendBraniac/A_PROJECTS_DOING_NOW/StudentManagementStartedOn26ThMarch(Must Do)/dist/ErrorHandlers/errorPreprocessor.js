"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorPreprocessor = void 0;
const http_status_1 = __importDefault(require("http-status"));
const handleValidationError_1 = require("./handleValidationError");
const handleDuplicateError_1 = require("./handleDuplicateError");
const mongoose_1 = __importDefault(require("mongoose"));
const handleCastError_1 = require("./handleCastError");
const handleGenericError_1 = require("./handleGenericError");
const zod_1 = require("zod");
const handleZodError_1 = require("./handleZodError");
const errorPreprocessor = (err) => {
    let errorResponse = {
        message: "Validation Error",
        status: "Failed" || err.status,
        statusCode: http_status_1.default.NOT_FOUND || err.statusCode,
        issues: err.issues || []
    };
    if (err && err instanceof mongoose_1.default.Error.ValidationError) {
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
        errorResponse = (0, handleValidationError_1.handleValidationError)(err);
        return errorResponse;
        // console.log("Ami Validation Error");
        // console.log(err.errors);
    }
    else if (err && err.code === 11000) {
        console.log("Ami duplicate Error");
        errorResponse = (0, handleDuplicateError_1.handleDuplicateError)(err);
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
    }
    else if (err && err instanceof mongoose_1.default.Error.CastError) {
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
        errorResponse = (0, handleCastError_1.handleCastError)(err);
        return errorResponse;
    }
    else if (err && err instanceof zod_1.ZodError) {
        errorResponse = (0, handleZodError_1.handleZodError)(err);
        return errorResponse;
    }
    else {
        // errorResponse.statusCode = 400;
        // errorResponse.message = err.message;
        // errorResponse.status = "Generic Error";
        errorResponse = (0, handleGenericError_1.handleGenericError)(err);
        return errorResponse;
    }
};
exports.errorPreprocessor = errorPreprocessor;
