"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleDuplicateError = void 0;
const handleDuplicateError = (err) => {
    // let validationError: TError
    // console.log(errorResponse)
    const issues = [
        {
            path: '',
            message: 'Duplicate Error Found',
        },
    ];
    console.log(issues);
    return {
        statusCose: 409,
        status: 'Failed',
        err: 'This is Error',
        message: 'Duplicagion Error',
        issues,
        // stack: '',
    };
};
exports.handleDuplicateError = handleDuplicateError;
