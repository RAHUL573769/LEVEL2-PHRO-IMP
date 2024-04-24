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
const jwtHelpers_1 = require("../helpers/jwtHelpers");
const checkAuth = (...roles) => {
    //   console.log('Roles in Check Route', roles)
    return (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const token = req.headers.authorization;
        console.log(token);
        //   const email = req.body.email
        //   const password = req.body.password
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        //   const name = req.body.name
        //   console.log(email, password, name)
        if (!token) {
            throw new Error('Inavalid Token');
        }
        // const decodedToken = jwt.verify(token, 'jwt-secret')
        const decodedToken = (0, jwtHelpers_1.verifyToken)(token, 'jwt-secret');
        console.log(decodedToken);
        const { email, role } = decodedToken;
        console.log(email, role);
        const user = yield user_model_1.default.findOne({ email });
        //   const user = await User.findOne({ email })
        //   console.log(user)
        if (!user) {
            throw new Error('Invalid Email and Password');
        }
        const checkAuthorization = roles.includes(user.role);
        //   if (!checkAuthorization) {
        //     throw new Error('You are not Authorizes Password')
        //   }
        if (!checkAuthorization) {
            throw new Error('You are not Authorizes Password');
        }
        next();
    }));
};
exports.checkAuth = checkAuth;
