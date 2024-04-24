"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GenericError extends Error {
    constructor(message, code) {
        super(message);
        this.statusCode = code;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.default = GenericError;
