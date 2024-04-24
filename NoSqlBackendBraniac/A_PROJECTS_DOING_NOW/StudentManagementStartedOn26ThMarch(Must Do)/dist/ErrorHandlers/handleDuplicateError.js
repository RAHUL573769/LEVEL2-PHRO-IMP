"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleDuplicateError = void 0;
const http_status_1 = __importDefault(require("http-status"));
const handleDuplicateError = (error) => {
    var regex = /"(.*?)"/;
    var matches = error.message.match(regex);
    const issues = [
        {
            path: "",
            message: `Value is Duplicate for ${matches[1]}`
        }
    ];
    return {
        message: "Duplicate Error",
        status: "Failed",
        statusCode: http_status_1.default.NOT_FOUND,
        issues
    };
};
exports.handleDuplicateError = handleDuplicateError;
