"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handlerCastError = (err) => {
    const issues = [
        {
            path: err.path,
            message: err.message,
        },
    ];
    return {
        statusCode: 400,
        status: 'error',
        message: 'Cast Error',
        issues,
    };
};
exports.default = handlerCastError;
