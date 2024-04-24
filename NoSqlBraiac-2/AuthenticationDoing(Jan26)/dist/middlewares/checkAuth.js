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
const config_1 = __importDefault(require("../config"));
const jwtHelpers_1 = require("../helpers/JWT/jwtHelpers");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const checkAuth = (...roles) => {
    // console.log('Roles from Check Auth', roles)
    return (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        // const email = req.body.email
        const token = req.headers.authorization;
        // console.log('Token from check auth', token)]
        if (!token) {
            throw new Error('Invalid Token User');
        }
        const decodedToken = (0, jwtHelpers_1.verifyToken)(token, config_1.default.jwt_secret);
        // const decodedToken = jwt.verify(token as string, config.jwt_secret)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        req.decoded = decodedToken;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { email, role } = decodedToken;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const password = req.body.password;
        const user = yield user_model_1.default.findOne({ email });
        // console.log('User ', user)
        if (!user) {
            throw new Error('Invalid Email');
        }
        // if (!roles.includes(user?.role)) {
        //   throw new Error('You Are Not authorized')
        // }
        if (!roles.includes(user.role)) {
            throw new Error('You Are Not authorized');
        }
        next();
    }));
};
exports.checkAuth = checkAuth;
