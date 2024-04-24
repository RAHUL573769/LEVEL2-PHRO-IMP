"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleGenericError = void 0;
const handleGenericError = (err) => {
    //   let validationError: TError
    // console.log(errorResponse)
    const issues = [
        {
            path: '',
            message: err.message,
        },
    ];
    console.log(issues);
    return {
        statusCose: err.statusCode,
        status: 'Failed',
        err: 'This is Error',
        message: 'Generic Error',
        issues,
        // stack: '',
    };
};
exports.handleGenericError = handleGenericError;
