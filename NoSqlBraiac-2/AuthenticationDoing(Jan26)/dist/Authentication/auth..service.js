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
exports.authServices = void 0;
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
const config_1 = __importDefault(require("../config"));
const user_model_1 = __importDefault(require("../models/user.model"));
const jwtHelpers_1 = require("../helpers/JWT/jwtHelpers");
const passwordHelpers_1 = require("../helpers/PaswordHashingAbdCompare/passwordHelpers");
const doRegister = (data) => __awaiter(void 0, void 0, void 0, function* () {
    // eslint-disable-next-line no-unused-vars
    const password = data.password;
    // const hashedPassword = await bcrypt.hash(password, 9)
    const hashedPassword = yield (0, passwordHelpers_1.hashPassword)(password, 9);
    const result = yield user_model_1.default.create(Object.assign(Object.assign({}, data), { password: hashedPassword, userStatus: 'active', role: 'user' }));
    return result;
});
// eslint-disable-next-line no-unused-vars
const doLogin = (data) => __awaiter(void 0, void 0, void 0, function* () {
    // const user = await User.findOne(data)
    const user = yield user_model_1.default.findOne({ email: data.email }).select('+password'); //After adding bcypt
    if (!user) {
        throw new Error('Invalid Credentials');
    }
    const password = data.password;
    const hashedPassword = user.password;
    const isPasswordCorrect = yield (0, passwordHelpers_1.comparePassword)(password, hashedPassword);
    // const isCorrectPasword = await bcrypt.compare(password, hashedPassword)
    // console.log('Is paasword matched', isCorrectPasword)
    const payLoad = {
        email: user.email,
        role: user.role,
    };
    const token = (0, jwtHelpers_1.createToken)(payLoad, config_1.default.jwt_secret, {
        expiresIn: config_1.default.jwt_expires_in,
    });
    // const token = jwt.sign(payLoad, config.jwt_secret, {
    //   expiresIn: config.jwt_expires_in,
    // })
    // console.log(token)
    return token;
});
const doChangePassword = (decodedToken, //decoded token must be kept in ccokies
payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, role, iat, exp } = decodedToken;
    const user = yield user_model_1.default.findOne({ email }).select('+password');
    if (!iat) {
        throw new Error('NoIat');
    }
    console.log('Issued At', iat);
    console.log('User Password Changes', user === null || user === void 0 ? void 0 : user.passwordChangedAt);
    // if (iat > user?.passwordChangedAt) {
    //   throw new Error('old token')
    // }
}); //protected system
exports.authServices = {
    doRegister,
    doLogin,
    doChangePassword,
};
