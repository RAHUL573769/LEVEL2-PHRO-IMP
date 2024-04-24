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
exports.checkAuth = void 0;
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const user_model_1 = __importDefault(require("../models/user.model"));
const jwt_helpers_1 = require("../helpers/jwt.helpers");
// import { createToken } from '../helpers/jwt.helpers'
const checkAuth = (...roles) => {
    //   console.log(roles)
    return (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        // console.log(roles)
        //   console.log(req.headers.authorization)
        const token = req.headers.authorization;
        if (!token) {
            throw new Error('Invalid Token');
        }
        // const decodedToken = jwt.verify(token, 'tour-secret')
        const decodedToken = (0, jwt_helpers_1.verifyToken)(token, 'tour-secret');
        req.user = decodedToken;
        const { email, role } = decodedToken;
        console.log(decodedToken, email, role);
        if (!email) {
            throw new Error('Invalid Email in Decoded Email');
        }
        //   const email = req.body.email
        //   const password = req.body.password
        //   const user = await User.findOne({ email, password })
        const user = yield user_model_1.default.findOne({ email }).select('+password');
        if (!user) {
            throw new Error('Invalid User');
        }
        //   //   if (result?.role !== 'admin') {
        //   //     throw new Error('Invalid User Privilages')
        //   //   }
        if (!roles.includes(user === null || user === void 0 ? void 0 : user.role)) {
            throw new Error('Invalid User Privilages');
        }
        next();
    }));
};
exports.checkAuth = checkAuth;
