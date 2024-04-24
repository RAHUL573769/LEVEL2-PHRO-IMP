"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handlerGenericError = (err) => {
    const issues = [
        {
            path: '',
            message: err.message,
        },
    ];
    return {
        statusCode: err.statusCode,
        status: 'error',
        message: 'Generic Error',
        issues,
    };
};
exports.default = handlerGenericError;
