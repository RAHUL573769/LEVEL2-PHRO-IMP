"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
const mongoose_1 = __importDefault(require("mongoose"));
const handleDuplicateError_1 = __importDefault(require("./handleDuplicateError"));
const handlerValidationError_1 = __importDefault(require("./handlerValidationError"));
const handlerCastError_1 = __importDefault(require("./handlerCastError"));
const handlerGenericError_1 = __importDefault(require("./handlerGenericError"));
const GenericError_1 = __importDefault(require("../../classes/errorClasses/GenericError"));
const zod_1 = require("zod");
const handleZodError_1 = __importDefault(require("./handleZodError"));
const errorPreproccesor = (err) => {
    if (err instanceof zod_1.ZodError) {
        return (0, handleZodError_1.default)(err);
    }
    else if (err instanceof mongoose_1.default.Error.ValidationError) {
        return (0, handlerValidationError_1.default)(err);
    }
    else if (err.code && err.code === 11000) {
        return (0, handleDuplicateError_1.default)(err);
    }
    else if (err instanceof mongoose_1.default.Error.CastError) {
        return (0, handlerCastError_1.default)(err);
    }
    else if (err instanceof GenericError_1.default) {
        return (0, handlerGenericError_1.default)(err);
    }
    else {
        return {
            statusCode: 500,
            status: 'error',
            message: 'Unknown Error',
            issues: [
                {
                    path: '',
                    message: err.message,
                },
            ],
        };
        // errorResponse = handlerGenericError(err)
    }
};
exports.default = errorPreproccesor;
