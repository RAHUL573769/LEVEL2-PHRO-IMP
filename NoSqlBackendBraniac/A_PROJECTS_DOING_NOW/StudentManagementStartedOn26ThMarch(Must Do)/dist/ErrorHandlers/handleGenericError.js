"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleGenericError = void 0;
const handleGenericError = (error) => {
    const issues = [
        {
            path: "",
            message: error.message
        }
    ];
    return {
        message: "Generic Error From Handler",
        status: "Failed",
        statusCode: error.statusCode,
        issues
    };
};
exports.handleGenericError = handleGenericError;
