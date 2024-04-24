"use strict";
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
/* eslint-disable @typescript-eslint/no-explicit-any */
const globalErrorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Something went wrong';
    const status = err.status || 'error';
    console.log(mongoose_1.MongooseError);
    // if(err instanceof MongooseError)
    res.status(statusCode).json({
        status,
        message,
    });
};
exports.default = globalErrorHandler;
