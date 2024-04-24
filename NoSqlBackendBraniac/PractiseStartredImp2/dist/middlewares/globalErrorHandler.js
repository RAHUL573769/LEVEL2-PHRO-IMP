"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalHandler = (err, req, res, next) => {
    const message = "Something Not Right";
    const statusCode = 500;
    return res.status(statusCode).json({
        message: message,
        success: false,
        error: err
    });
};
exports.default = globalHandler;
