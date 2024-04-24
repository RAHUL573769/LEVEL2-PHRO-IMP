"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const catchAsyncHelpers_1 = require("../helpers/catchAsyncHelpers");
const auth_services_1 = require("./auth.services");
const successResponse_1 = require("../helpers/successResponse");
const loginUser = (0, catchAsyncHelpers_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_services_1.AuthServices.loginUser(req.body);
    // console.log("Result", result);
    const { refreshToken } = result;
    res.cookie("refreshToken", refreshToken, { httpOnly: true, secure: false });
    (0, successResponse_1.sendResponse)(res, {
        statusCode: 202,
        data: {
            accessToken: result.token,
            needsPasswordChange: result.needsPasswordChange
        },
        // data: result,
        message: "Auth Logged In",
        success: true
    });
}));
const refreshToken = (0, catchAsyncHelpers_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { refreshToken } = req.cookies;
    const result = yield auth_services_1.AuthServices.refreshToken(refreshToken);
    // console.log("Result", result);
    (0, successResponse_1.sendResponse)(res, {
        statusCode: 202,
        data: result,
        // data: {
        //   accessToken: result.token,
        //   needsPasswordChange: result.needsPasswordChange
        // },
        // data: result,
        message: "Auth Logged In",
        success: true
    });
}));
exports.AuthController = { loginUser, refreshToken };
