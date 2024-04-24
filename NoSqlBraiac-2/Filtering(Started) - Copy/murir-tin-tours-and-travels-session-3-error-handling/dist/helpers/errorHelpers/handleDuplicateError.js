"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handlerDuplicateError = (err) => {
    const regex = /"(.*?)"/;
    const matches = err.message.match(regex);
    const issues = [
        {
            path: '',
            message: `Duplicate value for ${matches[1]}`,
        },
    ];
    return {
        statusCode: 409,
        status: 'error',
        message: 'Duplicate Error',
        issues,
    };
};
exports.default = handlerDuplicateError;
