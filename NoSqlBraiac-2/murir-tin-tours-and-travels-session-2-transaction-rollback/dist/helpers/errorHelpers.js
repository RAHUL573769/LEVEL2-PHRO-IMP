"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleValidationError = void 0;
const handleValidationError = (err) => {
    // let errorResponse={};
    //   let validationErrors: TErrorResponse
    const errorValues = Object.values(err.errors);
    const issues = [];
    errorValues.forEach((errObj) => {
        issues.push({
            path: errObj.path,
            message: errObj.message,
        });
    });
    return {
        message: 'Validation Error',
        err: 'There is Validation Error',
        statusCode: 4000,
        status: 'error',
        issues,
    };
    console.log('27', errorValues);
};
exports.handleValidationError = handleValidationError;
