"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleValidationError = void 0;
const http_status_1 = __importDefault(require("http-status"));
const handleValidationError = (error) => {
    const errorValues = Object.values(error.errors);
    const issues = [];
    errorValues.forEach((errorObj) => {
        issues.push({
            path: errorObj.path,
            message: errorObj.message
        });
    });
    return {
        message: "Validation Error",
        status: "Failed",
        statusCode: http_status_1.default.NOT_FOUND,
        issues
    };
};
exports.handleValidationError = handleValidationError;
