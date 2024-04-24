"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleValidationError = void 0;
const handleValidationError = (err) => {
    //   let validationError: TError
    // console.log(errorResponse)
    const errorValues = Object.values(err.errors);
    const issues = [];
    errorValues.forEach((errObj) => {
        // console.log('14', errObj)
        issues.push({
            path: errObj.path,
            message: errObj.message,
        });
    });
    console.log(issues);
    return {
        statusCose: 400,
        status: 'Failed',
        err: 'This is Error',
        message: 'Validation Error',
        issues,
        // stack: '',
    };
};
exports.handleValidationError = handleValidationError;
