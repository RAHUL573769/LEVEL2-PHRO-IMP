"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleCastError = void 0;
const handleCastError = (err) => {
    // let validationError: TError
    // console.log(errorResponse)
    const issues = [
        {
            path: err.path,
            message: err.message,
        },
    ];
    console.log(issues);
    return {
        statusCose: 409,
        status: 'Failed',
        err: 'This is Error',
        message: 'Cast Error',
        issues,
    };
};
exports.handleCastError = handleCastError;
