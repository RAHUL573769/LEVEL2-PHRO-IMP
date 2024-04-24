"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.successResponse1 = void 0;
const successResponse1 = (res, data) => {
    res.status(data.statusCode).json({
        message: data.message,
        status: data.data,
        data: data.data
    });
};
exports.successResponse1 = successResponse1;
