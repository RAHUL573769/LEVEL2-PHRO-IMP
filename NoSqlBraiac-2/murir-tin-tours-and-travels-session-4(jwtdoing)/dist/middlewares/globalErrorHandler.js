"use strict";
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config"));
const errroPreprocessor_1 = __importDefault(require("../helpers/errorHelpers/errroPreprocessor"));
/* eslint-disable @typescript-eslint/no-explicit-any */
const globalErrorHandler = (err, req, res, next) => {
    // let statusCode = err.statusCode || 500
    // let message =
    // let status = err.status || 'error'
    let errorResponse = {
        //Fallback error response
        statusCode: err.statusCode || 500,
        status: err.status || 'error',
        message: err.message || 'Something went wrong',
        issues: err.issues || [],
    };
    console.log(err, "development mode");
    errorResponse = (0, errroPreprocessor_1.default)(err);
    // Sob error er Baap hocche JS Error Class
    res.status(errorResponse.statusCode).json({
        status: errorResponse.status,
        message: errorResponse.message,
        issues: errorResponse.issues,
        //only in NODE_ENV=development
        stack: config_1.default.node_env === 'development' ? err.stack : undefined,
        error: err,
    });
};
exports.default = globalErrorHandler;
//Error Pattern
// statusCode
//status
//message
//issues
