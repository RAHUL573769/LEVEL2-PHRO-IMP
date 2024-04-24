"use strict";
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const http_status_1 = __importDefault(require("http-status"));
const handleValidationError_1 = require("../errorHandlers/handleValidationError");
const handleDuplicateErroe_1 = require("../errorHandlers/handleDuplicateErroe");
const handleCateErro_1 = require("../errorHandlers/handleCateErro");
const GenericError_1 = __importDefault(require("../classes/errorClasses/GenericError"));
const handleGenericError_1 = require("../errorHandlers/handleGenericError");
/* eslint-disable @typescript-eslint/no-explicit-any */
const globalErrorHandler = (err, req, res, next) => {
    // let statusCode = err.statusCode || 500
    // let message = err.message || 'Something went wrong'
    // let status = err.status || 'error'
    let errorResponse = {
        message: err.message || 'Something went wrong',
        err: err,
        statusCose: http_status_1.default.NOT_FOUND,
        status: 'There is a Error .Please rectify',
        issues: err.issues || [],
        // stack: err.stack,
    };
    // console.log(err.name)
    if (err && err instanceof mongoose_1.default.Error.ValidationError) {
        errorResponse = (0, handleValidationError_1.handleValidationError)(err);
        console.log(errorResponse);
        // console.log('Ami Validation ERROR')
        // errorResponse.statusCose = 400
        // errorResponse.message = 'Validation Error'
        // errorResponse.status = 'There is a Error .Please rectify'
        // console.log(errorResponse)
        // const errorValues = Object.values(err.errors)
        // errorValues.forEach(
        //   (errObj: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
        //     errorResponse.issues.push({
        //       path: errObj.path,
        //       message: errObj.message,
        //     })
        //   },
        // )
    }
    else if (err instanceof GenericError_1.default) {
        errorResponse = (0, handleGenericError_1.handleGenericError)(err);
    }
    else if (err.code && err.code === 11000) {
        errorResponse = (0, handleDuplicateErroe_1.handleDuplicateError)(err);
    }
    else if (err instanceof mongoose_1.default.Error.CastError) {
        errorResponse = (0, handleCateErro_1.handleCastError)(err);
        // errorResponse.message = 'Invalid ObjectId'
        // errorResponse.statusCose = 404
        // errorResponse.err = ''
        // errorResponse.status = 'Failed'
        // errorResponse.issues = [
        //   {
        //     path: err.path,
        //     message: err.message,
        //   },
        // ]
    }
    res.status(errorResponse.statusCose).json({
        status: errorResponse.status,
        message: errorResponse.message,
        issues: errorResponse.issues,
        // stack: errorResponse.stack,
    });
};
exports.default = globalErrorHandler;
