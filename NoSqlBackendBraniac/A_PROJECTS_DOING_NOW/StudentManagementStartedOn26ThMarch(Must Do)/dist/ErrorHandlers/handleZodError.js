"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleZodError = void 0;
const http_status_1 = __importDefault(require("http-status"));
const handleZodError = (error) => {
    const issues = error.issues.map((issue) => {
        return {
            path: issue.path[issue.path.length - 1],
            message: issue.message
        };
    });
    return {
        message: "Zod  Error Found",
        status: "Failed",
        statusCode: http_status_1.default.NOT_FOUND,
        issues
    };
};
exports.handleZodError = handleZodError;
