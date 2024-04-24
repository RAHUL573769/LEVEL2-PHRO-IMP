"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const globalErrorHandler = (err, req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Something Went Wrong",
        err: err
    });
    next();
};
exports.globalErrorHandler = globalErrorHandler;
