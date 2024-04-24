"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleValidationError = (err) => {
    const errorValues = Object.values(err.errors);
    const issues = [];
    errorValues.forEach((errObj) => {
        issues.push({
            path: errObj.path,
            message: errObj.message,
        });
    });
    return {
        statusCode: 400,
        status: 'error',
        message: 'Validation Error',
        issues,
    };
};
exports.default = handleValidationError;
