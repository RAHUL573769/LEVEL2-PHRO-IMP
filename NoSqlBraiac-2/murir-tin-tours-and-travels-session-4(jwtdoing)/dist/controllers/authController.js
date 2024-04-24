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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const auth_service_1 = require("../services/auth.service");
const sendResponse_1 = __importDefault(require("../utils/sendResponse"));
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const register = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_service_1.authServices.register(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        data: result,
        message: 'User Registerd Succesfullly',
    });
}));
const login = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_service_1.authServices.login(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        data: result,
        message: 'User Logged In Succesfullly',
    });
}));
exports.authController = {
    register,
    login,
};
