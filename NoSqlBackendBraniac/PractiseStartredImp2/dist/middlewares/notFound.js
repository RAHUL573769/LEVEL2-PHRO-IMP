"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const notFound = (err, req, res, next) => {
    const message = "Something Not Right";
    const statusCode = 500;
    return res.status(http_status_1.default.NOT_FOUND).json({
        message: message,
        success: false,
        error: err
    });
};
exports.default = notFound;
